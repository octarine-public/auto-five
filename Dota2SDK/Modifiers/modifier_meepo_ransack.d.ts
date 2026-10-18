// AUTO-GENERATED - do not edit.
/**
 * Ransack's pure damage on each attack: `health_steal_heroes` against heroes, 60% of it against
 * creeps, none against buildings. The 60% is a class constant: the 7.41 key values carry only
 * `health_steal_heroes`, and the figure comes from the ability's own tooltip ("Reduced to 60%
 * against creeps", `DOTA_Tooltip_ability_meepo_ransack_Description`).
 */
declare class modifier_meepo_ransack extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	protected GetProcAttackBonusDamagePure(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
