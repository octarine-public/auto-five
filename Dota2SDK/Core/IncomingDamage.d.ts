// AUTO-GENERATED - do not edit.
/** One blow on its way to a unit: who deals it, how much lands and when. */
declare class IncomingDamageEntry {
	/** Index of the unit dealing the damage: the attacker of the `entity_hurt` event that settles it. */
	public readonly Source: number
	/** Damage the blow lands at its lowest roll, the target's armor, resistances and blocks already taken off. */
	public Damage: number
	/** Game time the damage lands. */
	public LandsAt: number
	/** Whether a projectile carries it; a swing without one lands at its attack point. */
	public HasProjectile: boolean
	/** The same blow at its highest roll; equal to `Damage` for anything that does not roll. */
	public MaxDamage: number
	/**
	 * What the blow lands on average: the source's own average roll, which weighs a chance to
	 * block by that chance - not the middle of the lowest and highest rolls, which holds only
	 * for an even chance. Equal to `Damage` for anything that does not roll.
	 */
	public AvgDamage: number
	constructor(
	/** Index of the unit dealing the damage: the attacker of the `entity_hurt` event that settles it. */
	Source: number, 
	/** Damage the blow lands at its lowest roll, the target's armor, resistances and blocks already taken off. */
	Damage: number, 
	/** Game time the damage lands. */
	LandsAt: number, 
	/** Whether a projectile carries it; a swing without one lands at its attack point. */
	HasProjectile: boolean, 
	/** The same blow at its highest roll; equal to `Damage` for anything that does not roll. */
	MaxDamage?: number, 
	/**
	 * What the blow lands on average: the source's own average roll, which weighs a chance to
	 * block by that chance - not the middle of the lowest and highest rolls, which holds only
	 * for an even chance. Equal to `Damage` for anything that does not roll.
	 */
	AvgDamage?: number)
	/**
	 * What the blow lands at the roll `strength`: the lowest by default, which is the only
	 * number a decision of one's own has to hold against.
	 */
	public At(strength?: ATTACK_DAMAGE_STRENGTH): number
}
/**
 * The blows on their way to one unit: attack swings past their start, attack and spell
 * projectiles in flight. `Before` sums what lands by a moment, which is what `HealthAt` takes
 * off the health. Entries settle on the `entity_hurt` event of their source and expire shortly
 * after their landing time when nothing confirms them, such as a missed attack.
 */
declare class IncomingDamage {
	public readonly Entries: IncomingDamageEntry[]
	/**
	 * Damage landing by the game time `time`, the blows of the source `except` left out: the
	 * asker's own. Every blow counts at the roll `strength`, the lowest by default; the average
	 * is what tells whether someone else's blows bring the target down first.
	 */
	public Before(time: number, except?: number, strength?: ATTACK_DAMAGE_STRENGTH): number
	/**
	 * Registers a blow at its lowest, highest and average roll; a swing from the same source
	 * still waiting for its projectile is replaced.
	 */
	public Add(source: number, damage: number, landsAt: number, hasProjectile: boolean, maxDamage?: number, avgDamage?: number): IncomingDamageEntry
	/** The blow from `source` that has no projectile yet: the swing a projectile is about to leave. */
	public Pending(source: number): Nullable<IncomingDamageEntry>
	/** Drops the swing from `source` that never reached its attack point. */
	public Cancel(source: number): void
	/** Drops the projectile blow from `source` that will not land any more. */
	public Dodged(source: number): void
	/** Settles the earliest blow from `source`: the game just dealt it. */
	public Landed(source: number): void
	/** Drops the blows the game never confirmed within `grace` seconds after their landing time. */
	public Prune(now: number, grace: number): void
	public Clear(): void
}
