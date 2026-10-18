// AUTO-GENERATED - do not edit.
declare class pangolier_gyroshell extends Ability {
	/** The shell rolls `duration`; a unit it rolls over is stunned for `stun_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public get TurnRate(): number
	public get HitRadius(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
