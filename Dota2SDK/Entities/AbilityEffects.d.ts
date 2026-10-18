// AUTO-GENERATED - do not edit.
/**
 * What a hit of an ability does to a unit, effect by effect: the unit states each takes and for
 * how long, or the push, pull or lift that carries the unit (`Ability.Effects`). The ability
 * refills it on every read, so take what is needed before reading it again.
 * @example
 * const effects = blast.EffectsOn(enemy)
 * effects.LostFor(EUnitCapability.Attack) // the disarm's seconds
 * effects.LostFor(EUnitCapability.Fight) // zero: the blast leaves spells and items
 */
declare class AbilityEffects {
	/** How many effects a hit brings. */
	public get Count(): number
	/** What the effects take away together. */
	public get Lost(): EUnitCapability
	/** The unit states the effect at `index` takes, as a `modifierstate` mask. */
	public StatesAt(index: number): bigint
	/** Seconds the effect at `index` lasts. */
	public DurationAt(index: number): number
	/** The motion the effect at `index` carries the unit through; `undefined` for states alone. */
	public MotionAt(index: number): Nullable<EMotionKind>
	/** What the effect at `index` takes away: what its states take, and the walk while it carries the unit. */
	public LostAt(index: number): EUnitCapability
	/**
	 * Seconds from the hit the effects keep the unit from every one of `capabilities`: for each,
	 * the longest effect that takes it, and the shortest of those; zero when one of them is left.
	 */
	public LostFor(capabilities: EUnitCapability): number
	/** @internal */
	public Clear(): this
	/** Adds an effect taking the unit states of `states` for `duration` seconds. */
	public Add(states: bigint, duration: number): this
	/** Adds a motion of `kind` - a push, a pull, a lift - carrying the unit for `duration` seconds. */
	public AddMotion(kind: EMotionKind, duration: number): this
	/** Cuts every effect's duration by `factor`: what the target's status resistance leaves. */
	public Scale(factor: number): this
}
