// AUTO-GENERATED - do not edit.
declare class bristleback_quill_spray extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * `quill_base_damage` and `quill_stack_damage` for every stack the target carries from the
	 * sprays before, capped at `max_damage` as the server caps each hit.
	 */
	public GetRawDamage(target: Unit): number
}
