// AUTO-GENERATED - do not edit.
/**
 * Per-unit prediction state: the positions of the last server ticks, the velocity they imply,
 * the motion or move order the unit is known to follow, and the version of the owner's abilities
 * that invalidates cached ability profiles. `Unit` creates one and the SDK updates it once per
 * `PostDataUpdate`.
 */
declare class UnitPrediction {
	/**
	 * Displacement over the last tick divided by its duration, in units per second; zero until
	 * two samples exist.
	 */
	public readonly Velocity: Vector3
	/** Grows whenever an ability of the unit changes level, talents included. */
	public AbilitiesVersion: number
	/** The blows on their way to the unit; `HealthAt` takes them off the health. */
	public readonly IncomingDamage: IncomingDamage
	constructor(owner: IMovingBody)
	/** The timeline the unit's own casts and responses are laid on. */
	public get Timeline(): CastTimeline
	/** The estimate of another unit's position the unit's timelines fill. */
	public get Estimate(): MovementPrediction
	/** Consecutive samples kept, at most 16. */
	public get SampleCount(): number
	/** Server tick of the last jump that walking cannot explain, `-1` if none was seen. */
	public get LastDiscontinuityTick(): number
	/**
	 * Changes of course per second the unit is expected to make - starts, stops and turns of its
	 * walk - as it was seen to make them of late (`CourseWatch`).
	 */
	/**
	 * Whether our sight ruled out the course the unit, unseen, was last seen on: walked on, it
	 * would have come into a cell we see, and it was not seen there (`FogWatch`).
	 */
	public get CourseRuledOut(): boolean
	public get CourseChangeRate(): number
	/** The point of the unit's last move order, while the order is being followed. */
	public get Destination(): Nullable<Vector3>
	/** The teleport, knockback, dash or lift the game shows the unit in right now. */
	public get Motion(): Nullable<Motion>
	/**
	 * Game time a push, pull, lift, tow or carry - shown, or expected of a cast of ours - stops
	 * moving the unit against its will; `now` when nothing carries it.
	 */
	public get ForcedMotionUntil(): number
	/**
	 * Game time every motion - shown, or expected of a cast of ours - stops moving the unit: a push,
	 * a pull, a lift, and its own dash or teleport as well - Mirana's Leap, which the game does not
	 * cast again while she is in the air; `now` when nothing moves it.
	 */
	public get MotionUntil(): number
	/** The states the unit is expected to be in right now, which `Unit.UnitStateMask` adds to the networked ones. */
	public get ExpectedStateMask(): bigint
	/**
	 * Records that the unit is expected to hold `state` until the game time `until`, as right
	 * after a disable was cast at it and before the server confirms it, from `showsBy` on - the
	 * moment its effect lands. Not shown by `PredictionSDK.Tuning.ExpectationGrace` past that, it
	 * is dropped: the cast missed. A later call for the same state replaces the earlier one; a
	 * time that has passed clears it.
	 */
	public ExpectState(state: modifierstate, until: number, showsBy?: number): void
	/** Game time the expected `state` ends; `now` when none is expected. */
	public ExpectedStateUntil(state: modifierstate): number
	/**
	 * Game time the unit is expected to fall into `state` - the moment a cast of ours brings it,
	 * `now` once it shows; `Infinity` when none is expected.
	 */
	public ExpectedStateFrom(state: modifierstate): number
	/**
	 * Records that the unit is expected to be carried through `motion`, as right after a push of
	 * the local player's own was cast at it and before it lands (`Ability.MotionOn`): the unit's
	 * position past the motion's start follows it, after any motion it is in before. The motion
	 * the game shows with the modifier confirms and replaces it; not shown by
	 * `PredictionSDK.Tuning.ExpectationGrace` past its start, it is dropped: the push missed.
	 */
	public ExpectMotion(motion: Motion): void
	/** The unit is no longer expected to be carried through `motion`. */
	public ForgetMotion(motion: Motion): void
	/**
	 * Game time the networked `state` ends, as the modifiers that bring it say: the ones created
	 * the tick the state rose, and every one on the unit known to carry it - its class declares
	 * it, or the game showed it - so a second stun laid on a first one counts. `now` when the unit
	 * is not in the state; `Infinity` when nothing with a duration explains it, which is the safe
	 * answer for a cast that must wait it out.
	 */
	public StateUntil(state: modifierstate): number
	/**
	 * Networked position `ticksAgo` samples back, `0` being the latest; `undefined` beyond the
	 * history.
	 */
	public PositionAt(ticksAgo: number, out?: Vector3): Nullable<Vector3>
	/** Server tick of the sample `ticksAgo` back, `-1` beyond the history. */
	public TickAt(ticksAgo: number): number
	/**
	 * Mean velocity over the last `samples` samples, in units per second; zero with fewer than
	 * two samples.
	 * @example
	 * unit.Prediction.AverageVelocity(5)
	 */
	public AverageVelocity(samples: number, out?: Vector3): Vector3
	/**
	 * Where the unit is expected to be `delay` seconds from now. A motion or a known move order
	 * gives the exact point - or, with `options.aim`, where an effect aimed at it in the motion is
	 * to go; otherwise the unit is walked along its heading around obstacles. An unseen unit walks
	 * on from where it was last seen at its speed, for the time it has been out of sight too, on
	 * its course - straight, and round what stands in its way by the shortest way to its heading
	 * past it (`FogRoute`); one a hint placed since - or a motion that set it down, a lift, a push -
	 * its course unknown, or one standing then, stays there (`Unit.SeenAt`, `CourseKnown`); one
	 * whose course our sight ruled out stays where it last could be (`CourseRuledOut`); one walked
	 * for `PredictionTuning.UnseenWalk` stays where the walk got to. A hold a cast of ours brings stops the walk as it lands
	 * (`Unit.ImmobileFrom`), not before: a root on its way leaves the unit walking until then - an
	 * unseen one on from its last sighting, not drawn back toward it as the landing nears.
	 */
	public Predict(delay: number, destination: Nullable<Vector3>, options: IMovementOptions, out: MovementPrediction): MovementPrediction
	/**
	 * The route the unit is expected to walk over `duration` seconds as points every `step`
	 * seconds, the current position first.
	 */
	public PredictPath(duration: number, step: number, destination: Nullable<Vector3>, ignoreDestination: boolean): Path
	/**
	 * The farthest the unit can be at the game time `to` from where it is at `from`, both from
	 * now on: a motion - the game's, or a push of ours it is expected to go through - carries it
	 * its own way, and whenever neither that nor a hold until `heldUntil` keeps it, it walks at
	 * its speed whichever way it likes. An upper bound, for an effect placed around the unit at
	 * one moment and landing at the other.
	 */
	public ReachBetween(from: number, to: number, heldUntil: number): number
	/**
	 * Every cell the unit can reach within `delay` seconds, the turn it has to make first
	 * included: the set of places an enemy can be by then. A motion under way carries the unit
	 * to its end first; only the time left after it is walked. An unseen unit reaches from where
	 * it was last seen, for the time it has been out of sight too (`Unit.SeenAt`).
	 */
	public PredictRegion(delay: number): ReachableRegion
	/** @internal The game shows the unit in `motion`; an expectation of it is confirmed. */
	public AddMotion(motion: Motion): void
	/**
	 * @internal The game no longer shows `motion`: the facing it set the unit down with is kept; a
	 * push of an unseen unit keeps the one a lift set it down with.
	 */
	public RemoveMotion(motion: Motion): void
	/**
	 * Which way the unit faces, in radians: the server's facing while it is seen; while it is not,
	 * the facing a lift set it down with since - it comes down facing as it was taken up - else the
	 * one it was last seen with.
	 */
	public get Facing(): number
	/** @internal The game no longer shows any motion of `kind`. */
	public RemoveMotions(kind: EMotionKind): void
	/** @internal */
	public SetDestination(position: Nullable<Vector3>): void
	/** @internal */
	public NoteAbilityLevelChanged(): void
	/** @internal */
	public Tick(): void
	/** @internal */
	public Reset(): void
}
