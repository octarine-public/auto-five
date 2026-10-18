// AUTO-GENERATED - do not edit.
/**
 * Amphibian Rhapsody: on, Largo's bar takes his three songs in the places of Catchy Lick,
 * Frogstomp and Croak of Genius (`Swaps`), and a song strummed on the beat - one every
 * `rhythm_interval` from the moment the rhapsody came on, `rhythm_grace_period` wide - takes; off
 * the beat it is lost.
 */
declare class largo_amphibian_rhapsody extends Ability {
	/** Whether the rhapsody on takes `ability` off Largo's bar, a song in its place. */
	public Swaps(ability: Ability): boolean
	/** The radius round Largo his songs take, the rhapsody's own. */
	public GetBaseAOERadiusForLevel(level: number): number
	/** Seconds between two beats. */
	public get BeatInterval(): number
	/** Seconds wide a beat is: a strum within half of it either side takes. */
	public get BeatGrace(): number
	/**
	 * Seconds the game time `time` lies past the last beat of the rhapsody on now - below
	 * `BeatInterval`; NaN while it is off.
	 */
	public SinceBeat(time: number): number
	/**
	 * Whether a song strummed at the game time `time` takes: on a beat, at it or just past it -
	 * within half its grace, the tick it may land late counted. The grace before the beat takes
	 * too, but a strum there would leave the rest of the beat to a second one, which the game
	 * counts a miss; past it, the songs' cooldown outlasts the beat.
	 */
	public OnBeatAt(time: number): boolean
}
