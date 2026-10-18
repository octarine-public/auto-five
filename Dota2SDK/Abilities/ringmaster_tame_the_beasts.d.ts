// AUTO-GENERATED - do not edit.
declare class ringmaster_tame_the_beasts extends Ability implements INuke {
	/** The longest fear: the whip fully charged, `fear_duration_max`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public readonly StartLocation: Vector3
	public get AOERadius(): number
	public IsNuke(): this is INuke
	public GetMultiplier(level?: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseMinAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
