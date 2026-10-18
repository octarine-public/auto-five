// AUTO-GENERATED - do not edit.
/**
 * Shadow Walk on an ally - Aghanim's Shard: an allied hero, never Bounty Hunter himself; the game
 * turns an order at him down.
 */
declare class bounty_hunter_wind_walk_ally extends Ability implements IBuff {
	public readonly BuffModifierName = "modifier_bounty_hunter_wind_walk"
	public IsBuff(): this is IBuff
	public GetBaseActivationDelayForLevel(level: number): number
	public CanTarget(unit: Unit): boolean
}
