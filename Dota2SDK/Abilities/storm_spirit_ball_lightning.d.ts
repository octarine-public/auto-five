// AUTO-GENERATED - do not edit.
/**
 * Ball Lightning: Storm Spirit travels `ball_lightning_move_speed` fast to the point, as far as the
 * mana left after the cast pays for (`GetBaseCastRangeForLevel`).
 */
declare class storm_spirit_ball_lightning extends Ability {
	public GetRawDamage(target: Unit): number
	public GetBaseCastRangeForLevel(level: number): number
	public BaseTravelCost(level?: number): number
	public PercentTravelCost(level?: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public get CastRange(): number
	public IsBlink(): boolean
	/**
	 * The travel cast from `from` at `toward`, starting at `landsAt`: as far that way as the mana
	 * pays for at most.
	 */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
}
