// AUTO-GENERATED - do not edit.
declare class spirit_breaker_charge_of_darkness extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public StartedChargingTime: number
	public ChargeTargetIndex: number
	public CurrentProjectile: Nullable<TrackingProjectile>
	public readonly InteranlTargets: Set<number>
	public GetBaseAOERadiusForLevel(level: number): number
	public get CastRange(): number
}
