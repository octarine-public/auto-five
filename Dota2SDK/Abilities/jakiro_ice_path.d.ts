// AUTO-GENERATED - do not edit.
declare class jakiro_ice_path extends Ability {
	/** The path stands `path_duration`; a unit on it is stunned for `stun_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseSpeedForLevel(_level: number): number
	public get AppliesUnitState(): bigint
	public GetBaseActivationDelayForLevel(level: number): number
}
