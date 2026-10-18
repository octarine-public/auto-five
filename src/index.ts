import "./translations"

import { MenuManager } from "./menu"

/** The buff of a hero channelling a teleport. */
const Teleporting = "modifier_teleporting"
/** The buff of a hero holding a high five out, waiting for someone to answer it. */
const Requested = "modifier_plus_high_five_requested"

new (class CAutoFive {
	private readonly sleeper = new Sleeper()
	private readonly menu = new MenuManager()

	private readonly heroes: Hero[] = []
	private readonly modifiers: Modifier[] = []
	private readonly spells: plus_high_five[] = []
	/** When each of our heroes may answer, once the delay set in the menu has run out. */
	private readonly readyAt = new Map<plus_high_five, number>()

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
			const modifier = this.modifiers[index]
			if (modifier.Caster === undefined) {
				continue
			}
			if (modifier.Name === Teleporting) {
				this.UseAbility()
				continue
			}
			this.UseAbility(modifier.Parent)
		}
	}

	public ModifierCreated(modifier: Modifier) {
		if (this.isTracked(modifier)) {
			this.modifiers.push(modifier)
		}
	}

	public ModifierRemoved(modifier: Modifier) {
		if (this.isTracked(modifier)) {
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
		this.readyAt.clear()
	}

	/**
	 * Answers with every high five of ours that is ready: to the hero that asked for one, or,
	 * with no one asking, to the hero closest to its owner.
	 */
	protected UseAbility(requested?: Nullable<Unit>) {
		const useAtTP = this.menu.UseWhenTP.value,
			onlyAllies = this.menu.OnlyAllyState.value
		for (let index = this.spells.length - 1; index > -1; index--) {
			const abil = this.spells[index]
			if (!abil.IsReady) {
				continue
			}
			const owner = abil.Owner
			if (owner === undefined || requested === owner || !owner.IsControllable) {
				continue
			}
			const target = requested ?? this.getClosestHero(owner)
			if (!this.isValidTarget(target)) {
				continue
			}
			// teleporting away, an enemy at hand is answered whatever the rest of the page says
			if (useAtTP && target.IsEnemy() && owner.HasBuffByName(Teleporting)) {
				this.Use(abil)
				continue
			}
			if (!this.CanBeCasted(owner, target, abil.AOERadius)) {
				this.readyAt.delete(abil)
				continue
			}
			if (onlyAllies && target.IsEnemy()) {
				continue
			}
			if (this.delayPassed(abil)) {
				this.Use(abil)
			}
		}
	}

	private Use(abil: plus_high_five) {
		if (this.sleeper.Sleeping("UseAbility") || !abil.IsReady) {
			return
		}
		abil.UseAbility()
		this.readyAt.delete(abil)
		this.sleeper.Sleep(GameState.InputLag * 1000, "UseAbility")
	}

	private CanBeCasted(caster: Unit, target: Unit, radius: number) {
		return (
			caster.IsAlive &&
			!caster.IsStunned &&
			!caster.IsInvulnerable &&
			!caster.IsInAbilityPhase &&
			!caster.HasBuffByName(Requested) &&
			target.Distance2D(caster) <= radius
		)
	}

	/** Starts the delay the first time the high five could go, and lets it go once it has run. */
	private delayPassed(abil: plus_high_five) {
		const delay = this.menu.Delay.value
		if (delay === 0) {
			return true
		}
		const now = GameState.RawGameTime,
			readyAt = this.readyAt.get(abil)
		if (readyAt === undefined) {
			this.readyAt.set(abil, now + delay)
			return false
		}
		return now >= readyAt
	}

	private AbilityChanged(spell: plus_high_five, destroy?: boolean) {
		if (destroy) {
			this.spells.remove(spell)
			this.readyAt.delete(spell)
			return
		}
		if (this.shouldBeValidSpell(spell)) {
			this.spells.push(spell)
		}
	}

	private isTracked(modifier: Modifier) {
		return modifier.Name === Teleporting || modifier.Name === Requested
	}

	private shouldBeValidSpell(spell: plus_high_five) {
		const owner = spell.Owner
		return owner !== undefined && !owner.IsIllusion && !owner.IsEnemy()
	}

	private shouldBeValidHero(entity: Entity): entity is Hero {
		return entity instanceof Unit && entity.IsHero && !entity.IsIllusion
	}

	private getClosestHero(caster: Unit) {
		return this.heroes
			.filter(hero => hero !== caster && this.isValidTarget(hero))
			.orderBy(hero => caster.Distance2D(hero))[0]
	}

	private isValidTarget(target: Nullable<Unit>): target is Unit {
		return (
			target !== undefined &&
			!target.IsIllusion &&
			target.IsAlive &&
			target.IsVisible
		)
	}
})()
