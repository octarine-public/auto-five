// AUTO-GENERATED - do not edit.
declare class omniknight_guardian_angel extends Ability implements IBuff, IShield {
	public readonly BuffModifierName = "modifier_omninight_guardian_angel"
	public readonly ShieldModifierName = "modifier_omninight_guardian_angel"
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
}
