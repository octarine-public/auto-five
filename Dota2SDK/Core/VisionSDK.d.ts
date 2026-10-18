// AUTO-GENERATED - do not edit.
/** A spot the map reveals to one team for good (`ent_fow_revealer`). */
interface IRevealer {
	readonly Team: Team
	readonly Position: Vector3
	readonly Range: number
}
/**
 * The fog of war of either team as far as we can tell it. Our own team's sight is the game's
 * (`FogOfWar`); the enemy's is worked out from the viewers of theirs whose place we know - every
 * unit of theirs we see now, and those of theirs that never move (buildings, wards, static
 * summons) wherever we last saw them - each seeing what its vision range by the time of day
 * (`Unit.VisionRange`) and the terrain (`Terrain`) let it see, and from the spots the map
 * reveals to them for good. A viewer hidden from us - in the fog, invisible, a ward never seen -
 * is not in it: the game itself tells only the moment such a one catches sight of a unit of ours
 * (`Unit.IsVisibleForEnemiesLastTime`).
 *
 * Keeps `Unit.IsInEnemySight` of every unit of the local team, emitting
 * `UnitTeamVisibilityChanged` when it changes.
 * @example
 * if (VisionSDK.EnemySees(spot)) {
 * 	return
 * }
 */
declare class CVision {
	/** The class of the map's spots revealed to a team for good. */
	public static readonly RevealerClass = "ent_fow_revealer"
	/** The line of sight the game draws its fog by. */
	public readonly Terrain: TerrainSight
	constructor()
	/** The team the local player fights against; `Team.None` for a spectator. */
	public get EnemyTeam(): Team
	/**
	 * Whether `viewer` sees `point` now: alive, within its vision range for the time of day, in
	 * its line of sight or with flying vision.
	 */
	public Sees(viewer: Unit, point: Vector2 | Vector3): boolean
	/**
	 * The viewers of `team` whose place we know: alive units of the team with any vision, seen
	 * now or never moving. Gathered once per game time.
	 */
	public Viewers(team: Team): readonly Unit[]
	/**
	 * The first viewer of `team` we know of that sees `point`; none for a point only a spot the
	 * map reveals to the team shows them.
	 */
	public ViewerOf(team: Team, point: Vector2 | Vector3): Nullable<Unit>
	/** Whether a viewer of `team` we know of, or a spot the map reveals to it, sees `point`. */
	public TeamSees(team: Team, point: Vector2 | Vector3): boolean
	/**
	 * Whether a viewer of the enemy team we know of sees `point`: what a unit of ours standing
	 * there would show them, unless it is invisible to them.
	 * @example
	 * const safe = spots.filter(spot => !VisionSDK.EnemySees(spot))
	 */
	public EnemySees(point: Vector2 | Vector3): boolean
	/** The spots the map reveals to a team for good, read from the map once it loads. */
	public Revealers(): readonly IRevealer[]
	protected GameEnded(): void
	protected PostDataUpdate(dt: number): void
}
declare const VisionSDK: CVision
