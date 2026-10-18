// AUTO-GENERATED - do not edit.
declare class item_blink extends Item {
	public get IsCastRangeFake(): boolean
	/** How far a blink cast beyond its reach goes that way: shorter than the reach. */
	public get RangeClamp(): number
	public GetBaseCastRangeForLevel(level: number): number
	/**
	 * Where a blink cast from `from` at `toward` landing at `landsAt` sets its owner down: there,
	 * when it is within its reach (`CastRange`, the bonuses with it), else `blink_range_clamp` that
	 * way. It moves no one but its owner.
	 * @example
	 * const point = hero.Position.Extend2D(goal, Math.min(hero.Distance2D(goal), blink.CastRange))
	 * const lands = blink.MotionOn(hero, hero.Position, point, landsAt)?.EndPosition
	 */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
}
