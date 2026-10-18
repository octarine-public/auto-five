// AUTO-GENERATED - do not edit.
declare class modifier_invoker_deafening_blast_knockback extends Modifier implements IDebuff {
	public readonly IsHidden = false
	public readonly DebuffModifierName: string
	public IsDebuff(): this is IDebuff
	/** The push only carries its bearer: the game shows it no state - no stun, no root. */
	public get States(): Nullable<bigint>
	/**
	 * The push, from where the bearer stood as the modifier came - it starts moving the next tick;
	 * a modifier seen late works its start back - away from the middle of the wave that hit it, for
	 * the modifier's duration. The wave is the caster's blast projectile nearest the bearer - with
	 * the talent a blast is twelve waves round the caster; with none in sight the push goes away
	 * from the caster.
	 */
	public CreateMotion(): Nullable<Motion>
}
