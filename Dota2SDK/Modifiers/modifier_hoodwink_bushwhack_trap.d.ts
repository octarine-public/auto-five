// AUTO-GENERATED - do not edit.
declare class modifier_hoodwink_bushwhack_trap extends Modifier implements IDisable, IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	protected readonly DeclaredFunction: Map<EModifierfunction, () => [number, boolean]>
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	/**
	 * The drag to the tree, when the particle naming it came before the net did - in the tick the
	 * net catches, either comes first; the one after it calls `PullToward`.
	 */
	public CreateMotion(): Nullable<Motion>
	/** The net drags the bearer to the tree at `tree` - what its particle names (`hoodwink_bushwhack.PullOf`). */
	public PullToward(tree: Vector3): void
	protected GetFixedDayVision(): [number, boolean]
	protected GetFixedNightVision(): [number, boolean]
}
