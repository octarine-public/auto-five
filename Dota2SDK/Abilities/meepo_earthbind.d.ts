// AUTO-GENERATED - do not edit.
declare class meepo_earthbind extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get ProjectileAttachment(): string
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * The net flies to the point it was cast at and roots there: a circle, not a line. Read as a
	 * line, its flight would end a radius short of the point, the root expected before it shows -
	 * and a second Meepo's net would go out over it.
	 */
	public get SkillShotType(): ESkillShotType
}
