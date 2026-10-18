// AUTO-GENERATED - do not edit.
/**
 * Mystic Flare: a flare `radius` round at the point, burning the enemy heroes in it for
 * `duration`. With Aghanim's Scepter a second flare goes, centred, on the first enemy hero within
 * `scepter_radius` of the point that stands `radius` or farther from it (`SecondFlareRadius`).
 */
declare class skywrath_mage_mystic_flare extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	/**
	 * How far from the point a second flare of Aghanim's Scepter looks for an enemy hero to land
	 * on - one standing out of the first flare's `AOERadius`, by its middle; 0 without the scepter.
	 * @example
	 * const twice = flare.SecondFlareRadius > 0 && point.Distance2D(enemy.Position) >= flare.AOERadius
	 */
	public get SecondFlareRadius(): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
