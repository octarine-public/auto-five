// AUTO-GENERATED - do not edit.
declare class lone_druid_savage_roar extends Ability {
	/** The fear lasts `duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/** Radius of the fear; the Shard's ally buff reaches {@link ShardAllyRadius}. */
	public GetBaseAOERadiusForLevel(level: number): number
	/** Radius around the caster in which allies get the Shard's movement and attack speed; 0 without the Shard. */
	public get ShardAllyRadius(): number
	public get AppliesUnitState(): bigint
}
