// AUTO-GENERATED - do not edit.
declare class life_stealer_rage extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_life_stealer_rage"
	public IsBuff(): this is IBuff
	/** Lifestealer is immune to debuffs for `duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
}
