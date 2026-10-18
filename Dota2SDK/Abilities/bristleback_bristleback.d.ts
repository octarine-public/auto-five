// AUTO-GENERATED - do not edit.
/**
 * Bristleback: a passive, which Aghanim's Scepter makes a cast at a point as well - Bristleback
 * turns his back that way and, after `activation_delay`, sprays `activation_num_quill_sprays` quill
 * sprays toward it. Without the scepter it is no cast: it cannot be used.
 */
declare class bristleback_bristleback extends Ability implements INuke {
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	/** Cast with the scepter only; without it, the passive alone. */
	public get CanBeUsable(): boolean
	/** The sprays deal the quills' damage. */
	public IsNuke(): this is INuke
	public GetBaseActivationDelayForLevel(level: number): number
	public GetBaseManaCostForLevel(level: number): number
	public GetMaxCooldownForLevel(level: number): number
	/** The sprays reach as far as Quill Spray's do. */
	public GetBaseAOERadiusForLevel(_level: number): number
	public get CastRange(): number
	public GetBaseCastRangeForLevel(_level: number): number
	/** Cast anywhere, it hits only what its sprays reach from where Bristleback stands. */
	public ReachOf(target: Unit): number
}
