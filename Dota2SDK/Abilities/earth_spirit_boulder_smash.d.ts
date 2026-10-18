// AUTO-GENERATED - do not edit.
/**
 * Boulder Smash pushes and slows (`move_slow` for `duration`); it holds nothing - the game data says
 * a `stun_duration` of 0. Cast at a point, it kicks the remnant nearest Earth Spirit within
 * `RemnantSearchRadius` of him: the remnant flies from where it stands the way from Earth Spirit to
 * the click (`KickPoint`), `rock_distance` far - `Range` - harming every enemy it passes.
 */
declare class earth_spirit_boulder_smash extends Ability {
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public get Range(): number
	/** A remnant or unit within the search radius is what the smash can start from. */
	public GetBaseCastRangeForLevel(level: number): number
	/**
	 * How far from Earth Spirit a remnant may stand for a cast at a point to kick it: the search
	 * radius, with the cast range his items and talents add.
	 */
	public get RemnantSearchRadius(): number
	/**
	 * The remnant a cast at a point kicks now - the nearest within `RemnantSearchRadius` of Earth
	 * Spirit - or none.
	 * @example
	 * const remnant = smash.Remnant
	 * if (remnant !== undefined) {
	 * 	const output = smash.Predict(enemy, { SourcePosition: remnant.Position })
	 * 	smash.UseAbility(smash.KickPoint(remnant.Position, output.CastPosition, new Vector3()))
	 * }
	 */
	public get Remnant(): Nullable<EarthSpiritStone>
	/**
	 * Where to click for the remnant at `remnant` to fly through `through`: the kick runs the way
	 * from Earth Spirit to the click, from where the remnant stands - so the click is `through` moved
	 * by Earth Spirit's offset from the remnant.
	 */
	public KickPoint(remnant: Vector3, through: Vector3, out: Vector3): Vector3
	/**
	 * How far from `target` Earth Spirit may stand to smash it: a remnant by him - or one he may
	 * call there, a charge of Stone Remnant left - flies `Range` far; with neither, as far as a cast
	 * at it reaches.
	 */
	public ReachOf(target: Unit): number
	/** The kicked remnant flies from where it stands, not from Earth Spirit's hands. */
	public GetProjectileStartingPosition(pos: Vector3, ang: QAngle, scale?: number): Vector3
}
