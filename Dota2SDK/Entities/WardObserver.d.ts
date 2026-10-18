// AUTO-GENERATED - do not edit.
declare class WardObserver extends Unit {
	public get RingRadius(): number
	/**
	 * Wards can be denied at any health: an ally's attack takes 10 HP off them, a hero's 50 once
	 * they are at half health or below ({@link modifier_item_buff_ward}).
	 */
	public get IsDeniable(): boolean
	/**
	 * Wards stand invisible by their own class - no modifier and no networked state says so: an
	 * enemy sees one only through true sight (`IsTrueSightedForEnemies`).
	 */
	public get IsInvisible(): boolean
	public CalculateActivityModifiers(activity: GameActivity, ar: string[]): void
}
