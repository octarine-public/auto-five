// AUTO-GENERATED - do not edit.
declare class centaur_stampede extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_centaur_stampede"
	public IsBuff(): this is IBuff
	public GetBaseAOERadiusForLevel(level: number): number
	/** With Aghanim's Scepter the stampede lets its allies path through everything; without it the slow applies no state. */
	public get AppliesUnitState(): bigint
}
