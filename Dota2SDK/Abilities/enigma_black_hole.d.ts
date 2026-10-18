// AUTO-GENERATED - do not edit.
declare class enigma_black_hole extends Ability {
	public get AppliesUnitState(): bigint
	public get PullSpeed(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	/**
	 * How the hole `hole` - its thinker, at its middle - draws `unit` from the game time `since`:
	 * round and in toward the middle (`SpiralMotion`), `pull_speed` a second closer and
	 * `pull_rotate_speed` radians a second round - by Aghanim's outer pull, `scepter_drag_speed`
	 * and `scepter_pull_rotate_speed` until the unit's hull meets `radius`, then at the inner pace
	 * - until `duration` past the hole's coming.
	 */
	public SpiralOf(unit: Unit, hole: Unit, since: number, scepter: boolean): Nullable<Motion>
	/** The game applies the full duration whatever the target's status resistance. */
	public get IsAffectedByStatusResistance(): boolean
}
