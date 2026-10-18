// AUTO-GENERATED - do not edit.
declare class kez_talon_toss extends Ability implements INuke {
	/** The silence lasts `silence_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/** The talon silences the units it hits. */
	public get AppliesUnitState(): bigint
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit): number
}
