// AUTO-GENERATED - do not edit.
declare class dark_seer_wall_of_replica extends Ability implements IDebuff {
	public readonly DebuffModifierName = "modifier_dark_seer_wall_slow"
	public IsDebuff(): this is IDebuff
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public get Range(): number
	/** The wall stands at once: a line without a projectile. */
	public get SkillShotType(): ESkillShotType
}
