// AUTO-GENERATED - do not edit.
/** Coefficients the prediction core reads. */
declare class PredictionTuning {
	/**
	 * Largest per-tick displacement, in units, that position quantization alone can produce: the
	 * wire step is 1/32 per axis, so 1/16 bounds the two axes together; a standing unit does not
	 * move at all.
	 */
	public PositionQuantization: number
	/** Least `HitProbability` that counts as `EHitChance.High`; a starting threshold until the hit telemetry draws the curve. */
	public HitChanceHigh: number
	/** Least `HitProbability` that counts as `EHitChance.Medium`. */
	public HitChanceMedium: number
	/** Least `HitProbability` that counts as `EHitChance.Low`; below it a cast is impossible. */
	public HitChanceLow: number
	/**
	 * Radians a walking unit's facing turns off its course before it counts as a change of course
	 * (`Unit.CourseChangeRate`). Fitted with the four below on 15 October 2026: 5022 hooks
	 * predicted at a target in sight turning at random every 0.5-4 s on average, or by turns
	 * both, and judged against its track.
	 */
	public CourseTurn: number
	/**
	 * Seconds after a change of course within which the turn still settling counts with it: over
	 * three ticks and short of four, clear of where the ticks fall.
	 */
	public CourseSettle: number
	/** Seconds over which the changes of course a unit was seen to make, and the time it was watched, fade. */
	public CourseMemory: number
	/** Changes of course per second expected of a unit watched for little. */
	public CoursePriorRate: number
	/** Seconds of watching the prior rate counts for. */
	public CoursePriorWeight: number
	/**
	 * Seconds before and after the moment a projectile passes a unit that the unit still counts in
	 * its way: the moment is an estimate - the order's dispatch and the cast's start come early or
	 * late - and a unit crossing the path at speed is clear of it by a hair at the moment alone.
	 */
	public CollisionTimeMargin: number
	/** `HitProbability` given to a target that is not visible but whose last known position the shape covers. */
	public UnseenHitProbability: number
	/**
	 * Seconds an unseen unit is walked on its course from where it was last seen, round what
	 * stands in its way (`FogRoute`); past them it is kept where the walk got to - by then it has
	 * most likely turned, and a walk on takes the point farther from where it could be.
	 */
	public UnseenWalk: number
	/** Seconds ahead a unit looks for threats reaching it along its predicted path. */
	public ThreatHorizon: number
	/**
	 * Seconds a threat stays after its shape ended, so the `entity_hurt` the game reports for it
	 * still finds it: a margin for a report that lags behind the impact.
	 */
	public ThreatLinger: number
	/**
	 * Seconds past its landing time a blow in `IncomingDamage` waits for the game to confirm it
	 * before it is dropped: six ticks cover a report held back by lag.
	 */
	public DamageLandingGrace: number
	/**
	 * Seconds past the moment a cast of the local player's own should have shown on its target - a
	 * state from its modifier, a push from its motion - that the expectation waits for the game to
	 * show it before it is dropped as missed: six ticks cover an answer held back by lag.
	 */
	public ExpectationGrace: number
	/**
	 * How many `GameState.AnswerLag`s an order is given to show in the game's own state before it
	 * is taken as lost: the unit ordered to move starts moving, the invoked spell appears in its
	 * slot. The wait is bounded by the round trip and not by what the order does, beyond the turn a
	 * unit makes before it walks. Past it the unit was handed something else - an attack took the
	 * order over, the way is closed - and leading the prediction by an order that never took is
	 * worse than having no order at all. Twice the lag leaves a margin for a spike that grows with
	 * the lag itself. Time under a hold does not count: the wait starts over while the unit cannot
	 * move.
	 */
	public OrderAnswerMargin: number
	/**
	 * Seconds between the samples that measure how a unit flying as a projectile moves, and
	 * between the points its path is predicted at. The game rounds networked positions to
	 * whole units, so samples a tick apart drown the acceleration in that rounding; six ticks
	 * apart it comes out within a tenth, and the path is answered within the first fifth of
	 * a second of the flight.
	 */
	public FlightSampling: number
}
