// AUTO-GENERATED - do not edit.
declare class mars_spear extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** Inside the arena the spear pins the first enemy hero it meets; the shard's spear flies through. */
	public get CollisionTeam(): CollisionTeam
	public get CollisionFlags(): CollisionFlag
	/** The spear of this ability in flight - the latest its owner threw; none with none in sight. */
	public get InFlight(): Nullable<LinearProjectile>
	/**
	 * The drag of `unit`, impaled by `spear` - a projectile of this ability - seen at the game time
	 * `now`. The unit stays until the spear's middle passes it, then rides that middle - set onto
	 * the spear's line - at the spear's speed, tick by tick, to the last point within its flight,
	 * or to the last before a step onto ground the unit cannot stand on: trees, cliffs, where it is
	 * pinned.
	 */
	public DragOf(unit: Unit, spear: LinearProjectile, now: number): Nullable<Motion>
}
