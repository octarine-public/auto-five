// AUTO-GENERATED - do not edit.
/**
 * Ice Blast: a tracer flies `speed` fast from Ancient Apparition toward the point cast at, anywhere
 * on the map; released (`ancient_apparition_ice_blast_release`), it blows up where it is, at least
 * `radius_min` wide - the wider the longer it flew. It is placed as that blast: a circle at the
 * point, landing as the tracer gets there; in flight, `TracerReaches` says when to release it.
 */
declare class ancient_apparition_ice_blast extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public get CastRange(): number
	public get SkillShotType(): ESkillShotType
	/** The tracer of this cast in flight, or none. */
	public get Tracer(): Nullable<LinearProjectile>
	/**
	 * Seconds until the tracer in flight is over the spot of its way nearest `position` - below 0
	 * once past it; `Infinity` with none in flight.
	 * @example
	 * if (iceBlast.TracerReaches(enemy.Position) <= GameState.TickInterval) {
	 * 	release.UseAbility()
	 * }
	 */
	public TracerReaches(position: Vector3): number
}
