// AUTO-GENERATED - do not edit.
declare class pudge_meat_hook extends Ability implements INuke {
	public readonly ConsecutiveHits: number
	public get ProjectileAttachment(): string
	public IsNuke(): this is INuke
	/**
	 * The hook stops at the first unit on its way, allied or not, and at a rune: it brings the rune
	 * back instead of the target behind it.
	 */
	public get CollisionFlags(): CollisionFlag
	public get CollisionTeam(): CollisionTeam
	/**
	 * The data names no flags of what the hook affects, but the game's hook does not affect
	 * ancient creeps: it neither takes one nor stops at it, and flies on through. Seen on the demo
	 * on 15 October 2026 - a granite golem on its line and a satyr behind it, the satyr taken in
	 * 2 throws of 2; the owner saw it pass a black dragon too.
	 */
	public get TargetFlagsMask(): DOTA_UNIT_TARGET_FLAGS
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseSpeedForLevel(level: number): number
	public GetRawDamage(target: Unit): number
}
