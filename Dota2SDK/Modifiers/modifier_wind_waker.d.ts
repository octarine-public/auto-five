// AUTO-GENERATED - do not edit.
declare class modifier_wind_waker extends Modifier implements IBuff, IShield, IDisable, IDebuff {
	public readonly IsHidden = false
	public readonly BuffModifierName: string
	public readonly DebuffModifierName: string
	public readonly ShieldModifierName: string
	public IsDebuff(): this is IDebuff
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public IsDisable(): this is IDisable
	/**
	 * The cyclone on an enemy, the game's as Eul's (`LiftMotion.CycloneSwing`): swung round the
	 * spot the bearer was taken up at and set down there as the modifier ends. On the caster or an
	 * ally the caster may carry the cyclone off: no motion is known then.
	 */
	public CreateMotion(): Nullable<Motion>
}
