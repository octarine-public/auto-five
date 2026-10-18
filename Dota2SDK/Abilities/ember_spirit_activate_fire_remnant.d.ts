// AUTO-GENERATED - do not edit.
/**
 * Activate Fire Remnant: Ember Spirit dashes to his remnant nearest the point cast at, through
 * every remnant lying by it, each blasting as he passes: remnants sent together go off on one
 * activation (`RemnantNear`, `RemnantsNear`).
 */
declare class ember_spirit_activate_fire_remnant extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public get CastRange(): number
	/**
	 * His remnant lying nearest `position` within `radius` of it, or none: what a cast at
	 * `position` dashes to.
	 * @example
	 * const remnant = activate.RemnantNear(enemy.Position, activate.AOERadius)
	 * if (remnant !== undefined) {
	 * 	activate.UseAbility(remnant.Position)
	 * }
	 */
	public RemnantNear(position: Vector3, radius: number): Nullable<Unit>
	/**
	 * How many of his remnants lie within `radius` of `position`: what one activation there blows up.
	 * @example
	 * const blasts = activate.RemnantsNear(enemy.Position, activate.AOERadius)
	 */
	public RemnantsNear(position: Vector3, radius: number): number
}
