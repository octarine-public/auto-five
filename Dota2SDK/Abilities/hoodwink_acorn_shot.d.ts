// AUTO-GENERATED - do not edit.
/**
 * Acorn Shot flies as `hoodwink_acorn_shot_initial.vpcf` when cast at the ground and as
 * `hoodwink_acorn_shot_tracking.vpcf` at a unit and on every bounce. The tracking acorn comes
 * with neither its source nor its ability (the server launches it from a point, so the
 * game sends it as a projectile from a location), so the particle is what names it:
 * `ThreatSigns.Projectile` gives this class for it.
 */
declare class hoodwink_acorn_shot extends Ability implements INuke {
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	public GetBaseSpeedForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
}
