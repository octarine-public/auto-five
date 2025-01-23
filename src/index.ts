import "./translations"

import {
	Entity,
	EventsSDK,
	GameState,
	Hero,
	Modifier,
	plus_high_five,
	Sleeper,
	Unit
} from "github.com/octarine-public/wrapper/index"

import { MenuManager } from "./menu"

new (class CAutoFive {
	private readonly sleeper = new Sleeper()
	private readonly menu = new MenuManager()

	private readonly heroes: Hero[] = []
	private readonly modifiers: Modifier[] = []
	private readonly spells: plus_high_five[] = []

	private readonly modifierNames = [
		"modifier_teleporting",
		"modifier_plus_high_five_requested"
	]

	constructor() {
		EventsSDK.on("PostDataUpdate", this.PostDataUpdate.bind(this))
		EventsSDK.on("GameEnded", this.GameChanged.bind(this))
		EventsSDK.on("GameStarted", this.GameChanged.bind(this))
		EventsSDK.on("ModifierCreated", this.ModifierCreated.bind(this))
		EventsSDK.on("ModifierRemoved", this.ModifierRemoved.bind(this))
		EventsSDK.on("EntityCreated", this.EntityCreated.bind(this))
		EventsSDK.on("EntityDestroyed", this.EntityDestroyed.bind(this))
	}

	public PostDataUpdate(delta: number) {
		if (!this.menu.State.value || delta === 0) {
			return
		}
		for (let index = this.modifiers.length - 1; index > -1; index--) {
			const modifier = this.modifiers[index],
				caster = modifier.Caster,
				requested = modifier.Parent
			if (caster === undefined) {
				continue
			}
			switch (modifier.Name) {
				case "modifier_teleporting":
					this.UseAbility()
					break
				default:
					this.UseAbility(requested)
					break
			}
		}
	}

	public ModifierCreated(modifier: Modifier) {
		if (this.modifierNames.includes(modifier.Name)) {
			this.modifiers.push(modifier)
		}
	}

	public ModifierRemoved(modifier: Modifier) {
		if (this.modifierNames.includes(modifier.Name)) {
			this.modifiers.remove(modifier)
		}
	}

	public EntityCreated(entity: Entity) {
		if (entity instanceof plus_high_five) {
			this.AbilityChanged(entity)
		}
		if (this.shouldBeValidHero(entity)) {
			this.heroes.push(entity)
		}
	}

	public EntityDestroyed(entity: Entity) {
		if (entity instanceof plus_high_five) {
			this.AbilityChanged(entity, true)
			return
		}
		if (this.shouldBeValidHero(entity)) {
			this.heroes.remove(entity)
		}
	}

	public GameChanged() {
		this.sleeper.FullReset()
	}

	protected UseAbility(source?: Nullable<Unit>) {
		const useAtTP = this.menu.UseWhenTP.value,
			delay = this.menu.Delay.value,
			allies = this.menu.OnlyAllyState.value
		for (let index = this.spells.length - 1; index > -1; index--) {
			const abil = this.spells[index]
			if (!abil.IsReady) {
				continue
			}
			const owner = abil.Owner
			if (owner === undefined || source === owner || !owner.IsControllable) {
				continue
			}
			if (source === undefined) {
				source = this.getRequestedHero(owner)
			}
			if (!this.isVaidSource(source)) {
				continue
			}
			// use only ability if owner is caster from teleporting, for requested enemy
			const isUseTP = useAtTP && owner.HasBuffByName(this.modifierNames[0])
			if (isUseTP && source.IsEnemy()) {
				this.Use(abil, source)
				continue
			}
			if (
				!this.CanBeCasted(owner, source, abil.AOERadius) ||
				(allies && source.IsEnemy())
			) {
				continue
			}
			if (!delay) {
				this.Use(abil, source)
				continue
			}
			const delayKeyName = `delay_${owner.Index}`
			const remainingTime = this.sleeper.RemainingSleepTime(delayKeyName) / 1000
			if (remainingTime && remainingTime <= (1 / 30) * 2) {
				this.Use(abil, source)
				continue
			}
			if (!remainingTime) {
				this.sleeper.Sleep(delay * 1000, delayKeyName)
			}
		}
	}

	private Use(abil: plus_high_five, closestUnit: Nullable<Unit>) {
		if (this.sleeper.Sleeping("UseAbility")) {
			return
		}
		if (!abil.IsReady || !this.isVaidSource(closestUnit)) {
			return
		}
		abil.UseAbility()
		const delay = (1 / 30) * 2 + GameState.Ping
		this.sleeper.Sleep(delay, "UseAbility")
	}

	private CanBeCasted(caster: Unit, closestUnit: Nullable<Unit>, radius: number) {
		if (!this.isVaidSource(closestUnit)) {
			return false
		}
		return (
			caster.IsAlive &&
			!caster.IsStunned &&
			!caster.IsInvulnerable &&
			!caster.IsInAbilityPhase &&
			closestUnit.Distance2D(caster) <= radius &&
			!caster.HasBuffByName(this.modifierNames[1])
		)
	}

	private AbilityChanged(spell: plus_high_five, destroy?: boolean) {
		if (!this.shouldBeValidSpell(spell)) {
			return
		}
		if (destroy) {
			this.spells.remove(spell)
			return
		}
		this.spells.push(spell)
	}

	private shouldBeValidSpell(spell: plus_high_five) {
		const owner = spell.Owner
		return owner !== undefined && !owner.IsIllusion && !owner.IsEnemy()
	}

	private shouldBeValidHero(entity: Entity): entity is Hero {
		return entity instanceof Unit && entity.IsHero && !entity.IsIllusion
	}

	private getRequestedHero(caster: Unit) {
		return this.heroes
			.orderBy(x => caster.Distance2D(x))
			.find(hero => caster !== hero)
	}

	private isVaidSource(source: Nullable<Unit>): source is Unit {
		return (
			source !== undefined &&
			!source.IsIllusion &&
			source.IsAlive &&
			source.IsVisible
		)
	}
})()
