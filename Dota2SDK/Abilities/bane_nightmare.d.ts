// AUTO-GENERATED - do not edit.
/**
 * Nightmare: its target sleeps for the duration - and for its first `nightmare_invuln_time` it is
 * invulnerable: nothing cast at it meanwhile takes.
 */
declare class bane_nightmare extends Ability {
	public get AppliesUnitState(): bigint
	/** Seconds the slept unit is invulnerable from the hit on. */
	public get InvulnerableFor(): number
	protected FillEffects(out: AbilityEffects): void
	protected FillEffectsOn(out: AbilityEffects, target: Unit): void
}
