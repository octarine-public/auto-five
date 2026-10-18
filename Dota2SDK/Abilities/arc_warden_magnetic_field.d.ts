// AUTO-GENERATED - do not edit.
/**
 * Magnetic Field: a field at a point where our side evades every attack from outside it, and its
 * caster attacks faster - a shield and a buff for our side, not a control of the enemy's.
 */
declare class arc_warden_magnetic_field extends Ability implements IBuff, IShield {
	public readonly BuffModifierName = "modifier_arc_warden_magnetic_field_evasion"
	public readonly ShieldModifierName = "modifier_arc_warden_magnetic_field_evasion"
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
}
