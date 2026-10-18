// AUTO-GENERATED - do not edit.
declare class hoodwink_bushwhack extends Ability implements INuke {
	/** How fast the net drags a unit to its tree. Not in the game data, so a class constant. */
	public static readonly PullSpeed = 797
	/**
	 * How near the tree's middle the net leaves a unit, beside its hull. Not in the game data, so a
	 * class constant.
	 */
	public static readonly TreeOffset = 100
	/** The particle that names a netted unit's tree, at control point 15. */
	public static readonly TargetParticle = "particles/units/heroes/hero_hoodwink/hoodwink_bushwhack_target.vpcf"
	/**
	 * The drag of `unit` netted at the game time `since` to the tree at `tree`: straight to it at
	 * `PullSpeed`, a step every tick from the one after the net caught it, until `TreeOffset` and
	 * its hull from the tree's middle; none for a unit already that near.
	 */
	public static PullOf(unit: Unit, tree: Vector3, since: number): Nullable<Motion>
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
