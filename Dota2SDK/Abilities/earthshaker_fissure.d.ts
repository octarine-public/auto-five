// AUTO-GENERATED - do not edit.
declare class earthshaker_fissure extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** The fissure lands whole: a line without a projectile. */
	public get SkillShotType(): ESkillShotType
}
