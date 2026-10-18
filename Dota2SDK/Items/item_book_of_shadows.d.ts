// AUTO-GENERATED - do not edit.
declare class item_book_of_shadows extends Item implements IShield {
	/** The unit stays out of the game for `duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public readonly ShieldModifierName = "modifier_item_book_of_shadows_buff"
	/** The unit it goes on - its caster or an ally - is hidden out of reach: a shield. */
	public IsShield(): this is IShield
	public get AppliesUnitState(): bigint
}
