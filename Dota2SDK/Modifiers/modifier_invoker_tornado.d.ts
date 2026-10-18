// AUTO-GENERATED - do not edit.
declare class modifier_invoker_tornado extends Modifier implements IDebuff, IDisable {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	public IsDisable(): this is IDisable
	/**
	 * The lift, the game's cyclone (`LiftMotion.CycloneSwing`): swung round the spot the bearer was
	 * taken up at and set down there as the modifier ends - so what lands after it is aimed at that
	 * spot, not where the swing has the bearer now.
	 */
	public CreateMotion(): Nullable<Motion>
}
