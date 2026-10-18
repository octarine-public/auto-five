// AUTO-GENERATED - do not edit.
/** Chemical Rage: Alchemist rages a while - a buff on himself: he attacks, walks and heals faster. */
declare class alchemist_chemical_rage extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_alchemist_chemical_rage"
	public IsBuff(): this is IBuff
	/** Its move speed takes Alchemist into the fight and its attack speed serves it: cast as it begins. */
	public get IsCombatBuff(): boolean
}
