// AUTO-GENERATED - do not edit.
/**
 * Proximity Mines: a mine planted at the point. The server turns a mine down within
 * `placement_radius` of another of its side's mines, or off walkable ground (`CanPlaceAt`).
 */
declare class techies_land_mines extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	/** How near another mine of its side a mine may not go. */
	public get PlacementRadius(): number
	/**
	 * Whether a mine may go at `position`: on walkable ground, and with no mine of its owner's side
	 * within `PlacementRadius` of it, the mine's hull counted - the server turns any other down.
	 * @example
	 * const point = enemy.Position.Extend2D(hero.Position, 210)
	 * if (mines.CanPlaceAt(point)) {
	 * 	hero.CastPosition(mines, point)
	 * }
	 */
	public CanPlaceAt(position: Vector3): boolean
}
