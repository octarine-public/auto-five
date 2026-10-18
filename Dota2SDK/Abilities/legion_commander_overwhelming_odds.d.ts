// AUTO-GENERATED - do not edit.
declare class legion_commander_overwhelming_odds extends Ability implements INuke {
	public GetBaseAOERadiusForLevel(level: number): number
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	/**
	 * `damage`, with `damage_per_unit` for every unit and `damage_per_hero` for every hero of the
	 * target's team counted within `radius` of Legion Commander: the server counts them in the
	 * one circle on her it damages (OnSpellStart in server.dll), however far from the target.
	 */
	public GetRawDamage(target: Unit): number
}
