// AUTO-GENERATED - do not edit.
declare class void_spirit_aether_remnant extends Ability implements INuke {
	/** The remnant stands `duration`; a unit it catches is pulled for `pull_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get SkillShotType(): ESkillShotType
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public get AppliesUnitState(): bigint
	public get Range(): number
	/**
	 * How far ahead of the remnant, the way its vector points, its gaze reaches: a hero in it once
	 * it is up is pulled - one behind it, or under it, is not: cast at the target's point, the way
	 * on from the caster, it pulls nothing; short of it, pointing at it, it pulls it.
	 * @example
	 * const start = enemy.Position.Extend2D(hero.Position, remnant.WatchDistance / 2)
	 * hero.CastVectorTargetPosition(remnant, start, enemy.Position)
	 */
	public get WatchDistance(): number
}
