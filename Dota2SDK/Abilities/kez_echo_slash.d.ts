// AUTO-GENERATED - do not edit.
/**
 * Echo Slash strikes a think after its cast, not on it: the cast (OnSpellStart in server.dll)
 * makes "now" the first strike's time and thinks at once, but a strike needs a later time, so
 * the first comes on the next think, 0.1 s on (`SetNextThink(0.1)`, a constant of the game's
 * code with no key value of its own) - the `ActivationDelay`.
 */
declare class kez_echo_slash extends Ability implements INuke {
	public get TravelDistance(): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseActivationDelayForLevel(_level: number): number
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
	/** The slash covers its line at once. */
	public get SkillShotType(): ESkillShotType
}
