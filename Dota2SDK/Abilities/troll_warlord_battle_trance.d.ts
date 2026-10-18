// AUTO-GENERATED - do not edit.
declare class troll_warlord_battle_trance extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_troll_warlord_battle_trance"
	public IsBuff(): this is IBuff
	/** Cast at nothing: the trance goes on Troll himself - the game data names no behavior. */
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	public get AppliesUnitState(): bigint
	protected DurationFrom(values: ISpecialValues, level: number): number
}
