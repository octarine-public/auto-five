// AUTO-GENERATED - do not edit.
declare class mirana_starfall extends Ability implements INuke {
	public IsNuke(): this is INuke
	/** Seconds from the cast's end until the second star lands. */
	public get SecondStarTime(): number
	public get HomingTime(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/**
	 * The wave takes only the enemies Mirana's side sees as the cast ends: one in the fog, within
	 * the radius, gets the second star alone. Judged by what is seen now - a foe of the local
	 * player's while it is visible, a unit of ours while the other side sees it - on top of what
	 * any cast's effect needs (`Ability.CanHitAt`).
	 */
	public CanHitAt(target: Unit, time: number): boolean
}
