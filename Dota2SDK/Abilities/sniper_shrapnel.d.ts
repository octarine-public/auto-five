// AUTO-GENERATED - do not edit.
declare class sniper_shrapnel extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_sniper_shrapnel_slow"
	public IsDebuff(): this is IDebuff
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
}
