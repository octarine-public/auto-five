// AUTO-GENERATED - do not edit.
declare class terrorblade_terror_wave extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/** The wave fears the units it reaches: they run, doing nothing else. */
	public get AppliesUnitState(): bigint
	/** The fear lasts `fear_duration`; the wave's own `duration` is the metamorphosis it brings. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
}
