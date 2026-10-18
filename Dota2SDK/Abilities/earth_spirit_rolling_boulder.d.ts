// AUTO-GENERATED - do not edit.
declare class earth_spirit_rolling_boulder extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetRawDamage(target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public get CollisionTeam(): CollisionTeam
	public get CollisionFlags(): CollisionFlag
	public get AppliesUnitState(): bigint
	public get CastRange(): number
	/**
	 * Whether Earth Spirit rolls now - from the cast to the end of the roll: what else he casts
	 * meanwhile waits for it.
	 */
	public get IsRolling(): boolean
	public GetBaseCastRangeForLevel(level: number): number
}
