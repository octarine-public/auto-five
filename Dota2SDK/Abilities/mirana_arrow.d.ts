// AUTO-GENERATED - do not edit.
declare class mirana_arrow extends Ability implements INuke {
	/** The longest the arrow stuns, flown its whole `arrow_max_stunrange`; nearer, shorter (`GetAppliedDuration`). */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get SkillShotType(): ESkillShotType
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The arrow stuns the longer the farther it flew: from `arrow_min_stun` up to its full stun at
	 * `arrow_max_stunrange`, the flight counted as the game does - from where its owner casts it to
	 * where `target` stands as it is hit, as the cast's timeline predicts it.
	 */
	public GetAppliedDuration(target: Unit): number
	/**
	 * `arrow_bonus_damage` on top, by the flight up to `arrow_max_stunrange`, counted as for the
	 * stun (`GetAppliedDuration`).
	 */
	public GetRawDamage(target: Unit): number
	public get CollisionTeam(): CollisionTeam
	public get CollisionFlags(): CollisionFlag
	public get AppliesUnitState(): bigint
}
