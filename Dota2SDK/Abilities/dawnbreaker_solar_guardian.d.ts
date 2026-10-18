// AUTO-GENERATED - do not edit.
declare class dawnbreaker_solar_guardian extends Ability {
	/** The flight lasts its channel and air time; a unit where she lands is stunned for `land_stun_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public GetBaseAOERadiusForLevel(level: number): number
	/** The whole map: she lands beside an allied hero wherever it is (the data's cast range is 0). */
	public get CastRange(): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
