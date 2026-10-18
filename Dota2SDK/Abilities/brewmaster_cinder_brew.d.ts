// AUTO-GENERATED - do not edit.
declare class brewmaster_cinder_brew extends Ability implements INuke {
	public get DamageType(): DAMAGE_TYPES
	/** The barrel's impact deals `barrel_impact_damage` at every level: a nuke, known of the class itself. */
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseActivationDelayForLevel(_level: number): number
}
