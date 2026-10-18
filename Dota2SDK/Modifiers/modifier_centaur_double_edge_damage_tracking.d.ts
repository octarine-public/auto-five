// AUTO-GENERATED - do not edit.
declare class modifier_centaur_double_edge_damage_tracking extends Modifier implements IBuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	/** Its fade time is the damage it tracks. */
	protected readonly FadeTimeIsValue = true
	public get StackCount(): number
	public GetBonusDamage(_target: Unit): number
	public IsBuff(): this is IBuff
}
