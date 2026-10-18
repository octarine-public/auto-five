// AUTO-GENERATED - do not edit.
/**
 * Arena of Blood: a wall of `radius` round the point cast at, up `formation_time` after the cast,
 * `warrior_count` warriors evenly along it. A unit Spear of Mars carries toward the wall is pinned
 * once within its hull and `spear_distance_from_wall` of a warrior (`SpearDistanceFromWall`).
 */
declare class mars_arena_of_blood extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	/**
	 * How near a warrior on the wall, beyond its hull, a unit carried by Spear of Mars is pinned:
	 * a carry straight out from the centre pins it this far and its hull inside the wall at the
	 * earliest.
	 */
	public get SpearDistanceFromWall(): number
}
