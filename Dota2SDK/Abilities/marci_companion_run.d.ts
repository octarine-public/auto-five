// AUTO-GENERATED - do not edit.
declare class marci_companion_run extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
	protected MeetsSpellBlock(): boolean
}
