// AUTO-GENERATED - do not edit.
declare class zuus_cloud extends Ability implements INuke {
	/** The cloud strikes with Lightning Bolt: it holds for the bolt's ministun. */
	protected get HoldingAbility(): Nullable<string>
	public IsNuke(): this is INuke
	public GetBaseCastRangeForLevel(_level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseDamageForLevel(_level: number): number
	public GetRawDamage(target: Unit): number
	public get AppliesUnitState(): bigint
	public get CastRange(): number
}
