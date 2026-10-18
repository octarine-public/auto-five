// AUTO-GENERATED - do not edit.
/**
 * Shadow Dance, from Slark's own cast or an ally's Depth Shroud. The movement speed and regeneration
 * come from `modifier_slark_shadow_dance_passive_regen`; Slark's own cast adds the `attack_speed`
 * its talent grants.
 */
declare class modifier_slark_shadow_dance extends Modifier implements IBuff, IShield {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly ShieldModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
