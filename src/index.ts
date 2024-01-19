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

const bootstrap = new (class CAutoFive {
	private readonly sleeper = new Sleeper()
	private readonly menu = new MenuManager(this.sleeper)

	private readonly heroes: Hero[] = []
	private readonly modifiers: Modifier[] = []
	private readonly spells: plus_high_five[] = []

	private readonly modifierNames = [
		"modifier_teleporting",
		"modifier_plus_high_five_requested"
	]

	public Tick() {
		if (!this.menu.State.value) {
			return
		}
		for (let index = this.modifiers.length - 1; index > -1; index--) {
			const modifier = this.modifiers[index]
			if (this.sleeper.Sleeping(modifier.Name)) {
				continue
			}
			const caster = modifier.Caster,
				requested = modifier.Parent
			if (caster === undefined) {
				continue
			}
			switch (modifier.Name) {
				case "modifier_teleporting":
					this.ShouldUseAbility()
					break
				default:
					this.ShouldUseAbility(requested)
					break
			}
		}
	}

	public ModifierCreated(modifier: Modifier) {
		if (this.shoudBeValid(modifier)) {
			this.modifiers.push(modifier)
		}
	}

	public ModifierRemoved(modifier: Modifier) {
		if (this.shoudBeValid(modifier)) {
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

	protected ShouldUseAbility(requested?: Nullable<Unit>) {
		const useAtTP = this.menu.UseWhenTP.value,
			delay = this.menu.Delay.value,
			allies = this.menu.OnlyAllyState.value

		for (let index = this.spells.length - 1; index > -1; index--) {
			const abil = this.spells[index]
			if (!abil.IsReady) {
				continue
			}
			const owner = abil.Owner
			if (owner === undefined || requested === owner || !owner.IsControllable) {
				continue
			}
			if (requested === undefined) {
				requested = this.getRequestedHero(owner)
			}
			if (!this.CanBeCasted(owner, requested, abil.AOERadius)) {
				continue
			}
			// use only ability if owner is caster from teleporting, for requested enemy
			const isUseTP = useAtTP && owner.HasBuffByName(this.modifierNames[0])
			if (isUseTP && (requested?.IsEnemy(owner) ?? true)) {
				this.UseAbility(abil, requested)
				continue
			}
			if (allies && (requested?.IsEnemy(owner) ?? false)) {
				continue
			}
			if (!delay) {
				this.UseAbility(abil, requested)
				continue
			}
			const delayKeyName = `delay_${owner.Index}`
			const remainingTime = this.sleeper.RemainingSleepTime(delayKeyName) / 1000
			if (remainingTime && remainingTime <= (1 / 30) * 2) {
				this.UseAbility(abil, requested)
				continue
			}
			if (!remainingTime) {
				this.sleeper.Sleep(delay * 1000, delayKeyName)
			}
		}
	}

	private shoudBeValid(modifier: Modifier) {
		return this.menu.State.value && this.modifierNames.includes(modifier.Name)
	}

	private UseAbility(abil: plus_high_five, closestUnit: Nullable<Unit>) {
		if (this.sleeper.Sleeping("UseAbility")) {
			return
		}
		if (!abil.IsReady || closestUnit === undefined) {
			return
		}
		abil.UseAbility()
		const delay = (1 / 30) * 2 + GameState.Ping
		this.sleeper.Sleep(delay, "UseAbility")
	}

	private CanBeCasted(caster: Unit, closestUnit: Nullable<Unit>, radius: number) {
		if (closestUnit === undefined) {
			return false
		}
		return (
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
		return owner !== undefined && owner.CanUseAbilities && !owner.IsEnemy()
	}

	private shouldBeValidHero(entity: Entity): entity is Hero {
		return entity instanceof Unit && entity.IsHero && entity.CanUseAbilities
	}

	private getRequestedHero(caster: Unit) {
		return this.heroes
			.orderBy(x => caster.Distance2D(x))
			.find(hero => caster !== hero)
	}
})()

EventsSDK.on("Tick", () => bootstrap.Tick())

EventsSDK.on("GameEnded", () => bootstrap.GameChanged())

EventsSDK.on("GameStarted", () => bootstrap.GameChanged())

EventsSDK.on("ModifierCreated", mod => bootstrap.ModifierCreated(mod))

EventsSDK.on("ModifierRemoved", mod => bootstrap.ModifierRemoved(mod))

EventsSDK.on("EntityCreated", entity => bootstrap.EntityCreated(entity))

EventsSDK.on("EntityDestroyed", entity => bootstrap.EntityDestroyed(entity))
