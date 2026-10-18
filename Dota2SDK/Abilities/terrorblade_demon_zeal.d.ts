// AUTO-GENERATED - do not edit.
declare class terrorblade_demon_zeal extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_terrorblade_demon_zeal"
	public IsBuff(): this is IBuff
	/** Not while Terrorblade is in Metamorphosis: the game turns the cast down, and the form takes the zeal off. */
	public get CanBeUsable(): boolean
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
}
