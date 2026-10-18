// AUTO-GENERATED - do not edit.
declare class mars_gods_rebuke extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	/** The game walks Mars to within `radius` of the point cast at before the cast. */
	public GetBaseCastRangeForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
	public get Range(): number
	public GetBaseRangeForLevel(level: number): number
	public get EndRadius(): number
	/** The width of the sector it strikes about the way to the point cast at, in degrees. */
	public get Angle(): number
	/**
	 * Whether a strike by Mars at `from` toward `toward` takes a unit at `at`: the sector is
	 * Mars's own, not the point's - within `radius` of him and within half `angle` of the way to
	 * the point.
	 * @example
	 * const takes = rebuke.Takes(hero.Position, enemy.Position, enemy.Position)
	 */
	public Takes(from: Vector3, toward: Vector3, at: Vector3): boolean
}
