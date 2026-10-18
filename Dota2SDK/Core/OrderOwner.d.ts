// AUTO-GENERATED - do not edit.
/**
 * Who gives an order: the player, or a script that names itself. An owner's order may take the
 * place of its own orders still waiting (`replaces`); what other owners give is theirs to weigh.
 * @example
 * const owner = new OrderOwner("my-script")
 * ExecuteOrder.PrepareOrder({
 * 	orderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION,
 * 	issuers: [hero],
 * 	position,
 * 	owner,
 * 	replaces: true,
 * 	isPlayerInput: false
 * })
 */
declare class OrderOwner {
	public readonly Name: string
	/** The player's own orders. */
	public static readonly Player: OrderOwner
	/** The orders of a script that names no owner. */
	public static readonly Script: OrderOwner
	constructor(Name: string)
}
