// AUTO-GENERATED - do not edit.
/**
 * How an order ranks against the waiting orders of other units (`ExecuteOrder.Priority`): the
 * higher goes first, the orders of one unit always in the order they were given.
 */
declare enum EOrderPriority {
	/** A move: the first to give way. */
	Move = 0,
	/** An attack. */
	Attack = 1,
	/** A cast, an item's use, and anything else. */
	Cast = 2,
	/** Getting away: ahead of everything else, and it does not wait for a cast or a channel. */
	Escape = 3
}
