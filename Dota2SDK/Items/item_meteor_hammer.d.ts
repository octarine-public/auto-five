// AUTO-GENERATED - do not edit.
declare class item_meteor_hammer extends Item implements INuke {
	/** The stun lasts `stun_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/** The meteor stuns the units it lands on. */
	public get AppliesUnitState(): bigint
	public get ActivationDelay(): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(_level: number): number
	public GetRawDamage(target: Unit): number
}
