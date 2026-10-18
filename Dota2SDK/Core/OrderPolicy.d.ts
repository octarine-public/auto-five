// AUTO-GENERATED - do not edit.
/**
 * Whose a unit's orders are for the moment, between the scripts: another script's order leaves it
 * to that script for `ScriptYield`. The player's own order holds no script's: a script may take a
 * unit over from the player at once - a dodge, a combo. A script running a combo claims its units
 * (`Claim`): the player's walks, attacks and casts at a unit for them are blocked while
 * `BlockClaimed` is on, and the cursor waits on the combo's target between its orders.
 *
 * A script that names itself (`OrderOwner`) takes part: its orders given to a unit that is
 * another script's for the moment are dropped (`EOrderDrop.Yielded`), unless it is an escape. The
 * orders of a script that names none go as they always did, and still count as another script's
 * for those that do. The settings stand in the main menu, beside the humanizer.
 * @example
 * if (OrderPolicy.YieldOf(hero, owner) === EOrderYield.None) {
 * 	hero.CastPosition(ability, point)
 * }
 */
declare class COrderPolicy {
	/** Seconds a unit is another script's after it ordered the unit. */
	public ScriptYield: number
	/** Whether the player's walks, attacks and casts at a unit are blocked for a unit a script claims. */
	public BlockClaimed: boolean
	/** How many of the player's orders were blocked for units a script claimed. */
	public get BlockedOrders(): number
	/** Whether any script claims units. */
	public get Claiming(): boolean
	/** What the cursor waits on between a claiming script's orders: the first claim's target. */
	public get ClaimTarget(): Nullable<Vector3 | Entity>
	/**
	 * Claims `units` for `owner`'s combo, its cursor waiting on `target` between its orders; called
	 * again, the claim takes the new units and target.
	 * @example
	 * OrderPolicy.Claim(owner, [hero], enemy)
	 */
	public Claim(owner: OrderOwner, units: readonly Unit[], target?: Nullable<Vector3 | Entity>): void
	/** Lets `owner`'s claim go. */
	public Release(owner: OrderOwner): void
	/** The script whose claim holds `unit`; none. */
	public ClaimOf(unit: Unit): Nullable<OrderOwner>
	/**
	 * Whose `unit`'s orders are for `owner` at the game time `now`: another script's within its
	 * yield, else the owner's own.
	 */
	public YieldOf(unit: Unit, owner: OrderOwner, now?: number): EOrderYield
	/**
	 * Blocks the player's `order` when it walks, attacks or casts at a unit for a unit a script
	 * claims, while `BlockClaimed` is on; true when it does, counted in `BlockedOrders`.
	 */
	public Block(order: ExecuteOrder): boolean
	/** Notes a script's `order` given at the game time `now`; the player's own holds no script's. */
	public Note(order: ExecuteOrder, now?: number): void
	/** Forgets every order noted and every claim: a new connection, the game's end. */
	public Reset(): void
}
declare const OrderPolicy: COrderPolicy
