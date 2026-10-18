// AUTO-GENERATED - do not edit.
declare class storm_spirit_electric_vortex extends Ability {
	public GetCastRangeForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * The pull of `unit` by a vortex on it from the game time `since` to `until`: straight to
	 * `toward` - where Storm stood as it caught the unit, wherever he goes after - at
	 * `electric_vortex_pull_distance` over its duration, a step every tick from the one it came on
	 * to the first at or after its end, and no further than the point.
	 */
	public PullOf(unit: Unit, toward: Vector3, since: number, until: number): Nullable<Motion>
	public get AppliesUnitState(): bigint
	/**
	 * With Aghanim's Scepter the vortex pulls every enemy round Storm Spirit: a cast at nothing -
	 * an order at a unit the game turns down.
	 */
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
}
