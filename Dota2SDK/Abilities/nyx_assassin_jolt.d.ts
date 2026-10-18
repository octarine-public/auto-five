// AUTO-GENERATED - do not edit.
declare class nyx_assassin_jolt extends Ability implements INuke {
	public IsNuke(): this is INuke
	/**
	 * `max_mana_as_damage_pct` of the target's max mana and `damage_echo_pct` of what it took while
	 * its damage tracker ran; any unit with mana takes it - a ranged lane creep too - and one
	 * without takes none (OnSpellStart in server.dll makes no exception for creeps).
	 */
	public GetRawDamage(target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** Burrow lengthens the cast range while Nyx sits underground. */
	public GetBaseCastRangeForLevel(level: number): number
}
