// AUTO-GENERATED - do not edit.
declare class modifier_chilling_touch extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	protected GetAttackRangeBonus(): [number, boolean]
	/**
	 * The chilling touch's `damage`, amplified by Ancient Apparition's spell amplification: the
	 * server deals it as the ability's own damage with no flags (ON_ATTACK_LANDED in server.dll),
	 * apart from the attack.
	 */
	protected GetPreAttackBonusDamageMagical(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
