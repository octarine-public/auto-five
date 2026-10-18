// AUTO-GENERATED - do not edit.
declare class puck_waning_rift extends Ability implements INuke {
	/** The silence lasts `silence_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
	public GetBaseCastRangeForLevel(level: number): number
}
