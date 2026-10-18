// AUTO-GENERATED - do not edit.
/**
 * The prediction core: one cast, placed and scored. The mode follows the profile in the input:
 * a unit target gets a timeline and a hit check, a shape gets placed on the target's predicted
 * position, cut to range, checked for collisions and scored by how much of the target's
 * reachable region it covers, an area around the caster asks who will be inside. Everything
 * the core needs about the world arrives in the input; it never looks entities up itself. Each
 * ability owns one core, which owns the estimates and points it works with.
 */
declare class CastPredictor {
	/** `HitChance` for a probability, by the tuned thresholds. */
	public static ChanceOf(probability: number): EHitChance
	public Predict(input: PredictionInput, out: PredictionOutput): PredictionOutput
	/**
	 * Fills `out.AoeTargets` with the candidates the shape covers when it lands, the target first.
	 * Exposed for strategies that place their own shape.
	 */
	public CollectCovered(input: PredictionInput, out: PredictionOutput): void
	/**
	 * Scores the placement in `out` against `target`: impossible when the effect cannot affect
	 * it when it lands, immobile when it cannot leave. Otherwise the unit either keeps its course -
	 * walks on as it walks, or stands - until the effect lands, and is where the prediction has
	 * it, or changes it and can be anywhere it reaches by then: the chance it keeps it follows
	 * from how often it was seen to change it of late (`CourseChangeRate`), and the cast takes it
	 * with the share of its reachable ground the effect covers. An unseen unit is weighed the same
	 * over the time since it was last seen too, the longer out of sight the less likely it kept
	 * its course and the more ground it can have reached; one whose course is not known since -
	 * a hint placed it - keeps none. A projectile that stops at units hits it only if none of
	 * them turns into its way first (`clearOfOthers`). Exposed for strategies.
	 */
	public Evaluate(input: PredictionInput, out: PredictionOutput, target: IPredictionTarget): void
	/** Whether the placement in `out` still covers a unit of hull `hull` standing at `position`. */
	public Covers(out: PredictionOutput, position: Vector3, hull: number): boolean
	/**
	 * Whether `placed` - a cast already on its way - still flies clear to its target as `input`
	 * sees the world now: nothing it stops at comes first along its own line.
	 */
	public Clear(input: PredictionInput, placed: PredictionOutput): boolean
}
