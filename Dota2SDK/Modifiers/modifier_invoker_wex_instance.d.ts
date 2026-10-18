// AUTO-GENERATED - do not edit.
/** A Wex Invoker holds: attack speed and a share of movement speed, by Wex's level. */
declare class modifier_invoker_wex_instance extends InvokerOrbInstance {
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get Orb(): EInvokerOrb
	protected GetAttackSpeedBonusConstant(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
