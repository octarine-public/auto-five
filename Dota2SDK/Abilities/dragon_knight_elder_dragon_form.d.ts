// AUTO-GENERATED - do not edit.
/**
 * Elder Dragon Form: Dragon Knight becomes a dragon a while - a buff on himself: he attacks from
 * range (`AttackRangeBonus`), casts farther, walks faster, and his attacks breathe what the
 * form's level gives. Aghanim's Scepter adds a level.
 */
declare class dragon_knight_elder_dragon_form extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_dragon_knight_dragon_form"
	public IsBuff(): this is IBuff
	public get AttackRangeBonus(): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
