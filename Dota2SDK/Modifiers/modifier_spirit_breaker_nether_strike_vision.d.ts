// AUTO-GENERATED - do not edit.
/**
 * Nether Strike's mark on its target, from the cast until the strike lands. What it tells is kept
 * past it, per target: in the tick the strike lands the mark may go before or after the bash comes.
 */
declare class modifier_spirit_breaker_nether_strike_vision extends Modifier {
	/**
	 * Where `caster` cast the Nether Strike whose bash lands on `target` at the game time `at`;
	 * none for a bash of any other kind.
	 */
	public static FromOf(target: Unit, caster: Unit, at: number): Nullable<Vector3>
	protected OnAdded(): void
}
