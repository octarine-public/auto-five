// AUTO-GENERATED - do not edit.
declare class invoker_deafening_blast extends invoker_spell_extends implements INuke {
	public get IsRadial(): boolean
	public get EndRadius(): number
	public get AbilityDamage(): number
	public get RadialCount(): number
	/** Seconds the knockback lasts, by Quas. */
	public get KnockbackDuration(): number
	/** Seconds the disarm lasts, by Wex: the hold of a hit (`AppliedDuration`). */
	public get DisarmDuration(): number
	/** The disarm lasts `disarm_duration`, by Wex. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	protected get DurationLevel(): number
	/** The disarm: the push brings no state, it only carries. */
	public get AppliesUnitState(): bigint
	public IsNuke(): this is INuke
	/** A hit pushes the unit for the knockback's seconds and disarms it for the disarm's, each its own. */
	protected FillEffects(out: AbilityEffects): void
	/** On `target`, the push and the disarm each cut by its status resistance. */
	protected FillEffectsOn(out: AbilityEffects, target: Unit): void
	/**
	 * The knockback of a wave whose middle stands at `center` as it reaches a unit, at the game
	 * time `startTime`, for `duration` seconds: away from the wave's middle - a unit off the wave's
	 * line goes off it at an angle, not along it. The unit is at `position` at `seenAt` - the
	 * push's start, or later for a push seen late.
	 */
	public Knockback(position: Vector3, center: Vector3, startTime: number, duration: number, seenAt?: number): CoastingMotion
	/**
	 * The knockback of a wave cast from `from` toward `toward` that reaches `target` at the game
	 * time `landsAt`: from where the target will be then, away from the wave's middle at that
	 * moment - on the wave's line, short of the target by as much as the wave's front reaches
	 * across its offset. With the talent the blast is waves all round the caster: the one whose
	 * line runs nearest the target hits it.
	 */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
}
