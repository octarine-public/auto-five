// AUTO-GENERATED - do not edit.
declare class EarthSpiritStone extends Unit {
	/** Every Stone Remnant on the map, whoever called it: what Boulder Smash kicks and Geomagnetic Grip pulls. */
	public static get Remnants(): readonly EarthSpiritStone[]
	/**
	 * The living remnant nearest `position` within `radius` of it, or none.
	 * @example
	 * const kicked = EarthSpiritStone.NearestTo(hero.Position, smash.RemnantSearchRadius)
	 */
	public static NearestTo(position: Vector3, radius: number): Nullable<EarthSpiritStone>
}
