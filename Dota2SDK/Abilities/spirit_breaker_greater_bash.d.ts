// AUTO-GENERATED - do not edit.
declare class spirit_breaker_greater_bash extends Ability {
	/** A bash stuns for `duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/**
	 * The push of a bash on `unit` from the game time `since`: along the unit vector `direction`,
	 * `knockback_distance` over `knockback_duration`, a step every tick from the one after it came;
	 * a bash of Nether Strike's (`netherStrike`) `bonus_knockback_multiplier` times as far -
	 * Aghanim's raises both, as the data says.
	 */
	public KnockbackOf(unit: Unit, direction: Vector3, since: number, netherStrike: boolean): Nullable<Motion>
	public GetBaseDamageForLevel(level: number): number
}
