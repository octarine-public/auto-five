// AUTO-GENERATED - do not edit.
declare class modifier_drow_ranger_frost_arrows extends Modifier {
	public CachedDamage: number
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public BonusDamagePerStack(target: Unit): number
	/**
	 * The frost arrow's damage with autocast on and the mana for it. The server makes an arrow a
	 * frost arrow at its launch (ON_ATTACK in server.dll) only at an enemy that is not a building
	 * and not magic immune, from a Drow that is not silenced; an arrow cast by hand is a frost
	 * arrow too, which only its projectile's particle tells.
	 */
	protected GetPreAttackBonusDamage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
