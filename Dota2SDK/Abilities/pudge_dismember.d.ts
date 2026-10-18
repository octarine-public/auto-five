// AUTO-GENERATED - do not edit.
declare class pudge_dismember extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/**
	 * The pull of `unit` from the game time `since` to `until` at the latest: toward `toward` -
	 * where Pudge stands, channelling - `pull_units_per_second` a step every tick from the one it
	 * came on, while it is further than `pull_distance_limit` from him, middle to middle.
	 */
	public PullOf(unit: Unit, toward: Vector3, since: number, until: number): Nullable<Motion>
	public get AppliesUnitState(): bigint
}
