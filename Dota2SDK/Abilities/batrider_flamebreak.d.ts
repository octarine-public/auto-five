// AUTO-GENERATED - do not edit.
declare class batrider_flamebreak extends Ability implements INuke {
	/** The stun lasts `stun_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/** Flamebreak stuns the units it lands on. */
	public get AppliesUnitState(): bigint
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit): number
}
