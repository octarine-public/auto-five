// AUTO-GENERATED - do not edit.
/**
 * The states each modifier name has been seen to bring, as masks, and the states the modifiers of
 * each ability brought: learned during the session from the moments a unit state rose together
 * with the modifier, so a new modifier - a new ability's hold - is known after its first
 * appearance and no list has to be kept.
 * @example
 * if (PredictionSDK.States.Holds("enigma_black_hole")) {
 * 	// the game showed a Black Hole hold a unit where it stands this session
 * }
 */
declare class CStateCarriers {
	/** Every modifier name learned so far with the mask of states it brings. */
	public get Known(): ReadonlyMap<string, bigint>
	/** Every ability whose modifiers were seen to bring a state, with the mask of those states. */
	public get KnownAbilities(): ReadonlyMap<string, bigint>
	/** How many times something was learned: it changes whenever a modifier brings a state anew. */
	public get Learned(): number
	/** The mask of states a modifier named `name` brings; zero for one never seen with a state. */
	public Of(name: string): bigint
	/** The mask of states the modifiers of the ability named `name` were seen to bring. */
	public OfAbility(name: string): bigint
	/**
	 * Whether the modifiers of the ability named `name` were seen to hold their bearer where it
	 * stands (`ImmobilizingStates`).
	 */
	public Holds(name: string): boolean
	/** Records that the modifier `carrier` brought `state` with it, for it and for its ability. */
	public Learn(carrier: IStateCarrier, state: modifierstate): void
}
