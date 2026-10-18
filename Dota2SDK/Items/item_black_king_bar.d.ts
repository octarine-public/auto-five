// AUTO-GENERATED - do not edit.
declare class item_black_king_bar extends Item implements IShield {
	/** The immunity lasts `duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public readonly ShieldModifierName = "modifier_black_king_bar_immune"
	/** Its debuff immunity goes on its caster: a shield of the caster's side. */
	public IsShield(): this is IShield
	public get CurrentCharges(): number
	public set CurrentCharges(_newVal: number)
	public get AppliesUnitState(): bigint
	/** Its debuff immunity carries its bearer through the enemy's controls into a fight. */
	public get IsCombatBuff(): boolean
}
