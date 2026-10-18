// AUTO-GENERATED - do not edit.
/**
 * Shackleshot: the arrow hits a unit and binds it to what stands behind it - a unit of its side,
 * a tree - for `stun_duration`; with nothing there it holds it `fail_stun_duration`. Its search, in
 * the server's handler of the hit: the units of the hit unit's side - heroes, creeps, couriers -
 * but itself, then the standing trees, within `shackle_distance` of its origin, whose way from it
 * is within `shackle_angle` of the arrow's way: from where the caster stood as it flew to where it
 * struck the unit (`Binds`, `AnchorsNear`).
 */
declare class windrunner_shackleshot extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get ShackleAngle(): number
	public get ShackleDistance(): number
	public GetBaseSpeedForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** The arrow's flight plus the distance it looks for a second target behind the first. */
	public get Range(): number
	/**
	 * Whether an arrow of it from `from` that hits a unit at `first` binds it to what stands at
	 * `second`: within `ShackleDistance` of it, its way from `first` within `ShackleAngle` of the
	 * arrow's way. The server takes the arrow's way from where the caster stood as it flew to
	 * where it struck - on the unit's body, not at its origin: with `strike`, the unit's hull, it
	 * binds wherever within that of `first` the arrow strikes.
	 * @example
	 * const binds = shackle.Binds(hero.Position, enemy.Position, tree.Position, enemy.HullRadius)
	 */
	public Binds(from: Vector3, first: Vector3, second: Vector3, strike?: number): boolean
	/**
	 * What `target`, standing at `position`, may be bound to, into `out`: the living units of its
	 * side - heroes, creeps, couriers, not magic immune nor invulnerable - but itself, and the
	 * trees, within `ShackleDistance` of `position`. Which of them binds depends on the arrow's way
	 * (`Binds`).
	 * @example
	 * const anchors = shackle.AnchorsNear(enemy, enemy.Position, [])
	 * const binds = anchors.some(anchor => shackle.Binds(hero.Position, enemy.Position, anchor.Position))
	 */
	public AnchorsNear(target: Unit, position: Vector3, out: Entity[]): Entity[]
}
