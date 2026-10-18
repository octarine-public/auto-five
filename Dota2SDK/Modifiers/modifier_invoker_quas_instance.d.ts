// AUTO-GENERATED - do not edit.
/** A Quas Invoker holds: health regeneration, by Quas's level. */
declare class modifier_invoker_quas_instance extends InvokerOrbInstance {
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public get Orb(): EInvokerOrb
	protected GetHealthRegenConstant(): [number, boolean]
	protected UpdateSpecialValues(): void
}
