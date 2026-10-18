// AUTO-GENERATED - do not edit.
declare class tiny_toss extends Ability implements INuke {
	public IsNuke(): this is INuke
	/**
	 * How far round Tiny the unit he tosses stands: the nearest one within it is the one thrown -
	 * with none, the game turns the cast down.
	 */
	public get GrabRadius(): number
	public GetBaseAOERadiusForLevel(level: number): number
	/** Toss damage plus the bonus Grow adds to it. */
	public GetBaseDamageForLevel(level: number): number
	protected MeetsSpellBlock(): boolean
}
