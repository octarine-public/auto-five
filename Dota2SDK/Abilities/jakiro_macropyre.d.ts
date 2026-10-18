// AUTO-GENERATED - do not edit.
declare class jakiro_macropyre extends Ability {
	public get DamageType(): DAMAGE_TYPES
	public get AbilityImmunityType(): SPELL_IMMUNITY_TYPES
	public GetBaseDamageForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** The fire lies down its whole path at once: a line without a projectile. */
	public get SkillShotType(): ESkillShotType
}
