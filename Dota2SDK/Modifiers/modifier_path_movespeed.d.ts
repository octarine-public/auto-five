// AUTO-GENERATED - do not edit.
declare class modifier_path_movespeed extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	/** Its fade time is the speed it gives, a path hides nothing. */
	protected readonly FadeTimeIsValue = true
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsBuff(): this is IBuff
	public GetTexturePath(): string
	protected GetMoveSpeedBonusConstant(): [number, boolean]
}
