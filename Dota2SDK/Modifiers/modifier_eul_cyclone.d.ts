// AUTO-GENERATED - do not edit.
declare class modifier_eul_cyclone extends Modifier implements IBuff, IShield, IDisable, IDebuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	public readonly ShieldModifierName: string
	public IsDebuff(): this is IDebuff
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public IsDisable(): this is IDisable
	/**
	 * The cyclone, the game's as Tornado's (`LiftMotion.CycloneSwing`): swung round the spot the
	 * bearer was taken up at and set down there as the modifier ends - so what lands after it is
	 * aimed at that spot, not where the swing has the bearer now.
	 */
	public CreateMotion(): Nullable<Motion>
}
