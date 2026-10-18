// AUTO-GENERATED - do not edit.
declare class invoker_sun_strike extends invoker_spell_extends implements INuke {
	public get AbilityDamage(): number
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
	public get CastRange(): number
	/**
	 * How many strikes Cataclysm - Sun Strike cast on Invoker himself, granted by the Exort variant
	 * of Aghanim's Scepter - calls beside each enemy hero in sight; none without it.
	 */
	public get CataclysmCount(): number
	/** How near each hero a strike of Cataclysm may fall; it falls at random between this and `CataclysmMaxRange`. */
	public get CataclysmMinRange(): number
	/** How far from each hero a strike of Cataclysm may fall. */
	public get CataclysmMaxRange(): number
	/**
	 * The chance a Cataclysm landing `delay` seconds from now takes `target` with at least one of
	 * the strikes it calls beside it. The strikes are placed as the cast point ends -
	 * `ActivationDelay` before they land - `CataclysmCount` around each hero, between
	 * `CataclysmMinRange` and `CataclysmMaxRange` from where it stands then, at random; each takes
	 * what stands within its radius, hull counted, as it lands. Meanwhile the hero gets as far as
	 * it can (`Unit.ReachBetween`), whichever way. One strike takes it with the share of the ring
	 * that covers where it can be. The strikes beside one hero are kept apart, mostly on opposite
	 * sides, so one that takes the hero leaves the other less likely to, and the chance of at least
	 * one is never below that of strikes falling apart from each other, which is what this answers.
	 * Zero without Cataclysm.
	 * @example
	 * const timeline = sunStrike.GetCastTimeline(invoker)
	 * if (sunStrike.CataclysmHitProbability(enemy, timeline.HitTime) >= 0.7) {
	 * 	invoker.CastTarget(sunStrike, invoker)
	 * }
	 */
	public CataclysmHitProbability(target: Unit, delay: number): number
	/** `CataclysmHitProbability` in the buckets every cast's prediction uses. */
	public CataclysmHitChance(target: Unit, delay: number): EHitChance
}
