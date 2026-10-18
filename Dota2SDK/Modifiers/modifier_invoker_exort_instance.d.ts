// AUTO-GENERATED - do not edit.
/** An Exort Invoker holds: attack damage, by Exort's level. */
declare class modifier_invoker_exort_instance extends InvokerOrbInstance {
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get Orb(): EInvokerOrb
	protected GetPreAttackBonusDamage(): [number, boolean]
	protected UpdateSpecialValues(): void
}
