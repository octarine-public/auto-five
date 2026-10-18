// AUTO-GENERATED - do not edit.
declare class item_veil_of_discord extends Item implements IDebuff {
	public readonly DebuffModifierName = "modifier_item_veil_of_discord_debuff"
	/** The enemies in its area take more spell damage while it lasts. */
	public IsDebuff(): this is IDebuff
	public get IsAmplifier(): boolean
	/** The enemies in its area take more spell damage (`spell_amp`): the damage of any ability or item cast. */
	public Amplifies(ability: Ability): boolean
	public GetBaseAOERadiusForLevel(level: number): number
}
