// AUTO-GENERATED - do not edit.
declare class modifier_underlord_portal_buff extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	/** Its fade time is the damage it takes off. */
	protected readonly FadeTimeIsValue = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	protected GetIncomingDamagePercentage(): [number, boolean]
	protected GetMoveSpeedBonusPercentage(): [number, boolean]
}
