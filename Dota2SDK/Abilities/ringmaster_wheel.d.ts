// AUTO-GENERATED - do not edit.
declare class ringmaster_wheel extends Ability {
	public get MinRange(): number
	/**
	 * Dot-product threshold of the mesmerize cone: a unit is caught while it faces the
	 * wheel closer than this, 0.08715 being cos 85°.
	 */
	public get VisionCone(): number
	public GetBaseSpeedForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
}
