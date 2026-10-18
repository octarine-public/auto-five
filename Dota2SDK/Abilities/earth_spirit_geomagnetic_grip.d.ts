// AUTO-GENERATED - do not edit.
/**
 * Geomagnetic Grip pulls a remnant - or an ally - to Earth Spirit: the remnant comes from where it
 * stands straight to where he stood as the cast went, `pull_units_per_second` fast, silencing and
 * harming every enemy within `AOERadius` of its way for `duration` (`PullHitTime`). A remnant
 * cannot be clicked: the grip goes at the ground under it.
 */
declare class earth_spirit_geomagnetic_grip extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * The remnant within cast range whose pull, cast now, reaches `target` soonest (`PullHitTime`),
	 * or none.
	 * @example
	 * const remnant = grip.RemnantCatching(enemy)
	 * if (remnant !== undefined) {
	 * 	grip.UseAbility(remnant.Position)
	 * }
	 */
	public RemnantCatching(target: Unit): Nullable<EarthSpiritStone>
	/**
	 * Seconds from now until the remnant at `remnant`, pulled by a cast now, passes `target` where
	 * the target will be then - within `AOERadius` and its hull of the pull's way; `Infinity` when
	 * the pull misses it.
	 */
	public PullHitTime(remnant: Unit, target: Unit): number
}
