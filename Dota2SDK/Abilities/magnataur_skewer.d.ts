// AUTO-GENERATED - do not edit.
/**
 * Skewer: in the server's handler of the cast, Magnus charges at `skewer_speed` toward the point
 * cast at, as far as it or his cast range, whichever is nearer; a projectile `skewer_radius` wide
 * goes from where he stood along the same way at the same pace, and each enemy it touches is
 * carried with him to where the charge ends (`EndFrom`, `Takes`) - one behind him only within a
 * tick's travel short of its width: its first look is a tick on.
 */
declare class magnataur_skewer extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseCastRangeForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	/**
	 * A hit drags the unit with Magnus to where the charge ends: a pull, at most its range at its
	 * pace - the unit's walk taken meanwhile.
	 */
	protected FillEffects(out: AbilityEffects): void
	/** On `target` the same: the drag is no hold its status resistance shortens. */
	protected FillEffectsOn(out: AbilityEffects, _target: Unit): void
	/**
	 * Where a charge from `from` cast at `toward` ends, into `out`: at `toward`, or `CastRange`
	 * along the way to it, whichever is nearer.
	 * @example
	 * const end = skewer.EndFrom(hero.Position, ally.Position)
	 */
	public EndFrom(from: Vector3, toward: Vector3, out?: Vector3): Vector3
	/**
	 * Whether a charge from `from` ending at `end` takes a unit at `position` of hull `hull`: its
	 * projectile, `AOERadius` wide, touches it - the unit's hull, not its origin - on the way from
	 * where it is a tick after it leaves Magnus, its first look, to the end. Cast at a Sniper, it
	 * took one 160 off its way, and one 125 behind Magnus; one 145 behind him it did not - nor so
	 * what Reverse Polarity set 150 before him, the charge going back the other way (16 October
	 * 2026).
	 * @example
	 * const end = skewer.EndFrom(hero.Position, ally.Position)
	 * const carried = skewer.Takes(hero.Position, end, enemy.Position, enemy.HullRadius)
	 */
	public Takes(from: Vector3, end: Vector3, position: Vector3, hull: number): boolean
}
