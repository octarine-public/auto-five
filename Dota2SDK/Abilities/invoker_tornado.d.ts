// AUTO-GENERATED - do not edit.
declare class invoker_tornado extends invoker_spell_extends implements INuke {
	/**
	 * The lift: out of reach and out of action, both from the tick the tornado's modifier comes.
	 */
	public get AppliesUnitState(): bigint
	/** The lift lasts by Quas: `lift_duration`. */
	protected get DurationLevel(): number
	/** A cyclone: the game lifts for the whole of it whatever the target's status resistance. */
	public get IsAffectedByStatusResistance(): boolean
	public IsNuke(): this is INuke
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetRawDamage(target: Unit): number
}
