// AUTO-GENERATED - do not edit.
/**
 * Shield Crash hops `jump_horizontal_distance` along Pangolier's facing in `jump_duration`.
 * Rolling - in Rolling Thunder or Rollup - he hops for `jump_duration_gyroshell` and takes no
 * step of his own, but the roll keeps carrying him through the hop, his turning frozen (the
 * roll's motion in server.dll runs on under the jump): he lands that long at the roll's speed
 * ahead.
 */
declare class pangolier_shield_crash extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public GetBaseRangeForLevel(level: number): number
}
