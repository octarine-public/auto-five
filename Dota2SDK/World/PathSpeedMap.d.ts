// AUTO-GENERATED - do not edit.
/**
 * The map's currents that speed a walker going their way (`modifier_path_movespeed`), learnt from
 * the game: the server tells each unit the bonus it walks with - rising while it walks a current
 * its way, held at its most along it, fading once it turns against or off it - but not where the
 * currents lie or which way they run. Each tick a unit walks through a cell, the cell learns: a
 * bonus rising or held at the most seen votes it a current's, and adds the way the unit walks to
 * the way it runs; a bonus fading or none votes it no current's - unless the unit walks against
 * the way it runs, which tells nothing of it. A unit standing tells nothing, its bonus holds
 * whatever it walked last. The bonus answers a tick or two late, so the ground beside a current
 * gets a few votes from walks leaving it: the votes most walks cast decide. The most seen is the
 * bonus a current gives. Learnt during the session, afresh with every map grid.
 * @example
 * const path = hero.FindPath(target.Position)
 * const time = path === undefined ? Infinity : PathfinderSDK.PathSpeed.WalkTime(path, 300, 450)
 */
declare class PathSpeedMap {
	/** The name of the modifier the bonus comes with. */
	public static readonly ModifierName = "modifier_path_movespeed"
	constructor(grid: NavGrid)
	/** The bonus a current gives at its most, as the game showed it; 0 before any. */
	public get FullBonus(): number
	/** The current modifier on `unit`, which carries the bonus it walks with; none for a unit currents do not speed. */
	public static ModifierOf(unit: Unit): Nullable<Modifier>
	/**
	 * Whether a walk through the cell at `position` the way of `x`, `y` goes with a current seen
	 * there.
	 */
	public WithCurrent(position: Vector3, x: number, y: number): boolean
	/**
	 * Seconds a walk along `path` takes: at `on` while it goes with a current seen from its start,
	 * at `off` from the first stretch that does not - a current's bonus is the walker's own, kept
	 * while it walks the current's way and lost once it turns against or off it; a walk meeting
	 * another current later gains little before it leaves that one too.
	 */
	public WalkTime(path: Path, off: number, on: number): number
	/**
	 * A tick of `unit`: the bonus it walks with now against the tick before, and the way it walks,
	 * vote on the cell it walks through - the bonus in whole units of speed, as the game counts
	 * it: the value the server sends drifts by a hair while it holds.
	 * @internal
	 */
	public Observe(unit: Unit): void
	/**
	 * Forgets the bonus `unit` walked with as it leaves the game, so the next unit given its entity
	 * index starts without one.
	 * @internal
	 */
	public RemoveUnit(unit: Unit): void
	/** Forgets what was learnt and lets go of the cells; they are sized again to the next map grid. */
	public Clear(): void
}
