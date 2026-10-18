// AUTO-GENERATED - do not edit.
declare class item_ghost extends Item implements IShield {
	/** The ghost form lasts `duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public readonly ShieldModifierName = "modifier_ghost_state"
	/** Its caster goes ethereal, out of reach of attacks: a shield of the caster's side. */
	public IsShield(): this is IShield
	public get AppliesUnitState(): bigint
}
