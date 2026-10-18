// AUTO-GENERATED - do not edit.
/**
 * Unstable Concoction: Alchemist brews a while (`IsBrewing`, `BrewedFor`) and throws it
 * (`alchemist_unstable_concoction_throw`), the stun growing with the brew up to `BrewTime`; brewed
 * `BrewExplosion` long, it blows up in his hands, stunning him and the enemies by him. The brew
 * itself stuns no one: the stun is the throw's.
 */
declare class alchemist_unstable_concoction extends Ability {
	public GetBaseAOERadiusForLevel(level: number): number
	public GetRawDamage(_target: Unit): number
	/** Seconds of brewing that give the throw its longest stun. */
	public get BrewTime(): number
	/** Seconds of brewing after which it blows up in Alchemist's hands. */
	public get BrewExplosion(): number
	/** Whether Alchemist brews it now: the throw is his to cast. */
	public get IsBrewing(): boolean
	/** Seconds Alchemist has brewed it; 0 while he does not. */
	public get BrewedFor(): number
}
