// AUTO-GENERATED - do not edit.
declare class dazzle_shallow_grave extends Ability implements IBuff, IShield {
	public readonly BuffModifierName = "modifier_dazzle_shallow_grave"
	public readonly ShieldModifierName = "modifier_dazzle_shallow_grave"
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	/** The grave holds its unit for `duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
}
