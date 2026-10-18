// AUTO-GENERATED - do not edit.
/**
 * Harpoon: a harpoon thrown at an enemy unit, `projectile_speed` fast. As it lands it pulls the
 * target and its owner toward each other along the line between them, each `pull_distance_pct` of
 * the distance between them then, over `pull_duration`; nothing holds them at `min_distance`.
 */
declare class item_harpoon extends Item {
	public get ProjectileAttachment(): string
	/** Seconds the pull lasts. */
	public get PullTime(): number
	/** The share of the distance between them, as the harpoon lands, each of the two is pulled. */
	public get PullShare(): number
	public GetBaseSpeedForLevel(level: number): number
	/**
	 * The pull a cast landing at `landsAt` gives `target`: the enemy it is cast at, pulled toward
	 * its owner at `from`, or the owner, pulled toward the enemy at `toward` - each its share of
	 * the distance between them as it lands, along the line between them, over `pull_duration`.
	 * @example
	 * const pull = harpoon.MotionOn(hero, hero.Position, enemy.Position, landsAt)
	 * const lands = pull?.EndPosition
	 */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
}
