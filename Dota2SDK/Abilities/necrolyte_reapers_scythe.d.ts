// AUTO-GENERATED - do not edit.
declare class necrolyte_reapers_scythe extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	/** Its damage grows with the health the target lacks: what it is for is the kill. */
	public get IsFinisher(): boolean
	public IsNuke(): this is INuke
	public GetRawDamage(target: Unit): number
	public GetBaseActivationDelayForLevel(level: number): number
}
