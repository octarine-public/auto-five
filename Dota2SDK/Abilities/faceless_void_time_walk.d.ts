// AUTO-GENERATED - do not edit.
/** Time Walk: Faceless Void rushes `speed` fast toward the point, as far as `range` that way. */
declare class faceless_void_time_walk extends Ability {
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public IsBlink(): boolean
	/** The rush cast from `from` at `toward`, starting at `landsAt`: its reach that way at most. */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
}
