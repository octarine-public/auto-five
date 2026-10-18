// AUTO-GENERATED - do not edit.
declare class abyssal_underlord_pit_of_malice extends Ability implements INuke {
	/** The pit stands `pit_duration`; a unit in it is rooted for `ensnare_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
}
