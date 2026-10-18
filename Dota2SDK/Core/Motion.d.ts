// AUTO-GENERATED - do not edit.
/**
 * A displacement the unit does not walk: its start, end and timing are known, so its position at
 * any moment is exact rather than predicted.
 */
declare abstract class Motion {
	public readonly Kind: EMotionKind
	public readonly StartTime: number
	public readonly EndTime: number
	constructor(Kind: EMotionKind, StartTime: number, EndTime: number)
	/** Seconds the motion takes. */
	public get Duration(): number
	/** True while the motion is still going on at `time`. */
	public IsActiveAt(time: number): boolean
	/** Where the unit is once the motion ends. */
	public abstract get EndPosition(): Vector3
	/**
	 * The facing, in radians, the motion sets the unit down with; none when it leaves the unit
	 * facing as it turns.
	 */
	public get EndRotation(): Nullable<number>
	/** Where the unit is at `time`, written into `out`. */
	public abstract PositionAt(time: number, out?: Vector3): Vector3
	/**
	 * Where an effect aimed at the unit at `time` is to go, written into `out`: where the unit is,
	 * for most motions.
	 */
	public AimAt(time: number, out?: Vector3): Vector3
}
/** Straight travel from `Start` to `End` at constant speed over the motion's duration. */
declare class LinearMotion extends Motion {
	public readonly Start: Vector3
	public readonly End: Vector3
	constructor(kind: EMotionKind, startTime: number, endTime: number, Start: Vector3, End: Vector3)
	/**
	 * The motion a modifier reveals: the game applies its first tick in the tick the modifier
	 * appears, so the unit seen at `position` at `seenAt` is already one tick into a travel of
	 * `length` units along the unit vector `direction` over `duration` seconds.
	 */
	public static Observed(kind: EMotionKind, seenAt: number, position: Vector3, direction: Vector3, length: number, duration: number): LinearMotion
	/**
	 * The leap a modifier reveals by its first step, taken in the tick it appears: the unit seen at
	 * `at` at `seenAt`, a tick after it stood at `before`, going on that way `length` in all at
	 * `speed` - the way read off the step, which the networked facing only rounds. None without a
	 * step to read.
	 */
	public static FromFirstStep(kind: EMotionKind, seenAt: number, before: Nullable<Vector3>, at: Vector3, length: number, speed: number, land?: (end: Vector3) => Nullable<Vector3>): Nullable<LinearMotion>
	public get EndPosition(): Vector3
	public PositionAt(time: number, out?: Vector3): Vector3
}
/** Standing at `Start` until `EndTime`, then being at `End`: a teleport. */
declare class TeleportMotion extends Motion {
	public readonly Start: Vector3
	public readonly End: Vector3
	constructor(startTime: number, endTime: number, Start: Vector3, End: Vector3)
	public get EndPosition(): Vector3
	public PositionAt(time: number, out?: Vector3): Vector3
}
/**
 * A push that keeps its speed, then slows evenly: `Speed` along the unit vector `Direction` until
 * `CruiseEnd`, then down to `EndSpeed` by the motion's end. Deafening Blast's knockback goes so.
 */
declare class CoastingMotion extends Motion {
	public readonly Start: Vector3
	public readonly Direction: Vector3
	public readonly Speed: number
	public readonly CruiseEnd: number
	public readonly EndSpeed: number
	constructor(kind: EMotionKind, startTime: number, endTime: number, Start: Vector3, Direction: Vector3, Speed: number, CruiseEnd: number, EndSpeed: number)
	/**
	 * The push a modifier reveals at `seenAt`, the unit then at `position`: the start is where it
	 * stands less the way the push has carried it by then, so a push seen late - the unit coming
	 * into sight - still ends where it does.
	 */
	public static Observed(kind: EMotionKind, startTime: number, endTime: number, seenAt: number, position: Vector3, direction: Vector3, profile: {
		readonly Speed: number
		readonly CruiseEnd: number
		readonly EndSpeed: number
	}): CoastingMotion
	public get EndPosition(): Vector3
	/** Units travelled from `Start` by the game time `time`. */
	public DistanceAt(time: number): number
	public PositionAt(time: number, out?: Vector3): Vector3
}
/** What a tow reads from the unit that leads it: where it is expected to go, a point a step. */
interface ITowLeader {
	PredictPath(duration: number, step: number): {
		readonly Points: readonly Vector3[]
	}
}
/** A ring of a spiral nearer its middle that draws at a pace of its own: see `SpiralMotion`. */
interface ISpiralRing {
	/** How near the middle the ring begins. */
	readonly Radius: number
	readonly PullSpeed: number
	readonly TurnRate: number
}
/** How a lift swings its unit: see `LiftMotion`. */
interface ILiftSwing {
	readonly Radii: readonly number[]
	readonly Rates: readonly number[]
	readonly Ramp: number
}
