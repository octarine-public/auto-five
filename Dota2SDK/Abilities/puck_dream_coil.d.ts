// AUTO-GENERATED - do not edit.
declare class puck_dream_coil extends Ability implements INuke {
	/** The stun as it lands lasts `stun_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/** The coil stuns the units it catches as it lands; one that breaks it is stunned again, for `coil_stun_duration`. */
	public get AppliesUnitState(): bigint
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
