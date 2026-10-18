// AUTO-GENERATED - do not edit.
declare class rattletrap_rocket_flare extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	/** The flare flies to the point it was cast at and bursts there: a circle, not a line. */
	public get SkillShotType(): ESkillShotType
	public get CastRange(): number
}
