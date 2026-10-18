// AUTO-GENERATED - do not edit.
/**
 * Reverse Polarity: in the server's handler of the cast, every enemy within `pull_radius` of
 * Magnus is set at once at the spot `PullAhead` ahead of him, as he faces - the cast turns him
 * nowhere - on the ground nearest it it can stand on, and stunned (`PullPoint`).
 */
declare class magnataur_reverse_polarity extends Ability implements INuke {
	/** How far ahead of Magnus it sets what it pulls: the server's own, in none of its values. */
	public static readonly PullAhead = 150
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * Where a pull by Magnus at `from` facing `forward` sets what it takes, into `out`:
	 * `PullAhead` ahead of him.
	 * @example
	 * const pulledTo = polarity.PullPoint(hero.Position, hero.Forward)
	 */
	public PullPoint(from: Vector3, forward: Vector3, out?: Vector3): Vector3
	/**
	 * The pull: `target`, within `AOERadius` of Magnus at `from` as it lands at `landsAt`, is
	 * there at once at the spot ahead of him as he faces now; none for a unit out of its reach.
	 */
	public MotionOn(target: Unit, from: Vector3, _toward: Vector3, landsAt: number): Nullable<Motion>
}
