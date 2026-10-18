// AUTO-GENERATED - do not edit.
declare class mirana_leap extends Ability {
	public get UsesRotation(): boolean
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetHitTime(unit: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	public get CastRange(): number
	/**
	 * The leap a cast landing at `landsAt` gives `target` - Mirana: `leap_distance` the way she
	 * faces then, at `leap_speed`, from where she is by then, set down where she can stand
	 * (`PathfinderSDK.Standable`); as `modifier_mirana_leap` shows it once she leaps.
	 * @example
	 * const leap = mirana.GetAbilityByClass(mirana_leap)
	 * const lands = leap?.MotionOn(mirana, mirana.Position, mirana.Position, landsAt)?.EndPosition
	 */
	public MotionOn(target: Unit, _from: Vector3, _toward: Vector3, landsAt: number): Nullable<Motion>
}
