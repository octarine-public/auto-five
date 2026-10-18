// AUTO-GENERATED - do not edit.
declare class item_ethereal_blade extends Item implements INuke {
	public get DamageType(): DAMAGE_TYPES
	public IsNuke(): this is INuke
	public get IsAmplifier(): boolean
	/** Its target goes ethereal for the blast's amplification: the form is not a control it lays. */
	public get MakesEthereal(): boolean
	/** Its target goes ethereal, its magic resistance cut (`ethereal_damage_bonus`): magical damage lands harder. */
	public Amplifies(ability: Ability): boolean
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
}
