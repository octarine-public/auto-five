// AUTO-GENERATED - do not edit.
declare class modifier_silencer_brain_drain extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	public GetTexturePath(): string
	public IsBuff(): this is IBuff
	protected GetDamageOutgoingPercentage(params?: IModifierParams): [number, boolean]
	protected GetIncomingDamagePercentage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
