// AUTO-GENERATED - do not edit.
/**
 * A spell Invoker has to craft before he can cast it: three orbs in any order, then Invoke. The
 * hero holds as many orb instances as a spell takes and every cast pushes the oldest one out, so
 * what a spell still needs depends on what he is holding right now.
 */
declare class invoker_spell_extends extends Ability {
	/**
	 * @readonly
	 * @description Includes aghanim's scepter and quas level
	 */
	public QuasLevel: number
	/**
	 * @readonly
	 * @description Includes aghanim's scepter and wex level
	 */
	public WexLevel: number
	/**
	 * @readonly
	 * @description Includes aghanim's scepter and exort level
	 */
	public ExortLevel: number
	/** The orbs the spell is crafted from, as the game's own data says. */
	public get RequiredOrbs(): readonly EInvokerOrb[]
	/**
	 * The orbs the hero is holding, oldest first: the ones a further cast pushes out. Orbs cast in
	 * one frame come the same tick; the server's order of their modifiers tells them apart.
	 */
	public get HeldOrbs(): readonly EInvokerOrb[]
	/**
	 * Whether the spell sits in one of the invoked slots and can be cast: the game hides a spell
	 * that is not invoked. An invoke this client has just ordered counts until the server's
	 * answer is due, so a caller asking every tick does not order it twice.
	 */
	public get IsInvoked(): boolean
	/**
	 * Seconds between asking for the spell and being able to cast it: zero when it is already
	 * invoked, otherwise the wait for Invoke's own cooldown plus `GameState.AnswerLag`, the orders
	 * reaching the server and the answer coming back: the orb and invoke orders go out in one
	 * frame. `Infinity` when the recipe cannot be crafted at all.
	 * @example
	 * const lands = GameState.RawGameTime + sunStrike.InvokeDelay + sunStrike.ActivationDelay
	 */
	public get InvokeDelay(): number
	/** The craft the spell needs before it can be ordered; see {@link InvokeDelay}. */
	public get PrepareTime(): number
	/** Invoked, or crafted by the game time `time`: Invoke free and the answer back in time. */
	protected CanBeUsableAt(time: number): boolean
	/** Whether every orb the spell is crafted from has a level, so it can be invoked at all. */
	public get CanCraft(): boolean
	/**
	 * The fewest orbs to cast before Invoke crafts this spell, in order; empty when the hero is
	 * already holding what it takes. Orbs he holds and still needs are kept where keeping them
	 * costs nothing, since every cast pushes the oldest instance out.
	 * @example
	 * for (const orb of sunStrike.OrbsToCast) {
	 * 	orb.UseAbility()
	 * }
	 */
	public get OrbsToCast(): readonly Ability[]
	/**
	 * Crafts the spell: the orbs it still needs, then Invoke. Nothing is ordered unless every
	 * order can be given, so a refusal leaves the held orbs as they were; the answer is `true`
	 * at once when the spell is already invoked. The spell itself is not cast - the caller casts
	 * it once `IsInvoked` holds.
	 * @example
	 * if (sunStrike.Invoke() && sunStrike.IsInvoked) {
	 * 	sunStrike.UseAbility(target.Position)
	 * }
	 */
	public Invoke(queue?: boolean, showEffects?: boolean): boolean
	/**
	 * The level a value of the spell that grows with `orb` alone is read at: the orb's level - or,
	 * for a spell drafted to a hero without orbs (Ability Draft, its `_ad` twin), the spell's own,
	 * as its data lists one value a level. A value read at the spell's level plus an orb's needs
	 * nothing of this: without orbs that is the spell's level already.
	 */
	protected OrbValueLevel(orb: EInvokerOrb): number
	protected OrbLevel(orb: EInvokerOrb): number
	protected OrbAbility(orb: EInvokerOrb): Nullable<Ability>
	/**
	 * The orbs still missing, read off what the hero holds: casting `n` orbs keeps the newest
	 * `required - n` instances and the order inside the cast does not change what is held at the
	 * end, so the shortest plan is the first `n` whose kept instances are all wanted.
	 */
	protected OrbPlan(): readonly EInvokerOrb[]
}
