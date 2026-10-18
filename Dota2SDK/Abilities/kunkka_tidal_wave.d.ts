// AUTO-GENERATED - do not edit.
declare class kunkka_tidal_wave extends Ability {
	/** The disarm lasts `duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get SkillShotType(): ESkillShotType
	/** The wave hits when its front passes, along its whole width. */
	public get FlatFront(): boolean
	/** The hit lands when the wave the game reports is still this far short of the unit. */
	public get FrontLead(): number
	/** How far the wave travels: it starts one radius behind the caster and runs past the cast range. */
	public get Range(): number
	/** How far behind the caster the wave starts: the radius the key values give it. */
	public get StartBehind(): number
	/**
	 * How far to the side of its axis the wave hits, which is not the radius the key values give
	 * it.
	 */
	public GetBaseAOERadiusForLevel(_level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * The wave runs from behind the caster toward the point cast at for its travel distance, its
	 * hitting front in the lead. The way is the caster's to the point: the prediction names a cast
	 * direction for a vector cast only.
	 */
	public GetShapeTimeline(input: PredictionInput, output: PredictionOutput): IShapeTimeline
}
