// AUTO-GENERATED - do not edit.
/** Where an order is on its way to the game (`ExecuteOrder.Stage`). */
declare enum EOrderStage {
	/** Waiting in the humanizer's queue for its turn. */
	Queued = 0,
	/**
	 * Handed to the game. Whether the game acted on it is the game's state to show; a cast is
	 * followed until it does (`Started`) or never will (`Lost`).
	 */
	Sent = 1,
	/** Never handed to the game: `ExecuteOrder.DropReason` says why. */
	Dropped = 2,
	/** A cast sent that the game shows took: its cast point, its channel or its cooldown began. */
	Started = 3,
	/**
	 * A cast sent that the game never showed taking by when it should have - the walk, the turn
	 * and the answer counted - or that a later order of its units cut short first.
	 */
	Lost = 4
}
/** Why an order never reached the game (`ExecuteOrder.DropReason`). */
declare enum EOrderDrop {
	/** Not dropped. */
	None = 0,
	/** The humanizer is off, and an order that needs the cursor has no one to give it. */
	HumanizerOff = 1,
	/** Its point lies off the map's height map: no click lands there. */
	OffMap = 2,
	/**
	 * The same move to the same point: an instant after the last one, or while its units still
	 * walk there on such a move that went out before.
	 */
	Duplicate = 3,
	/** A later order of the same units took its place before it went. */
	Superseded = 4,
	/** Its target left the game or the sight before the cursor got to it. */
	TargetLost = 5,
	/** Its giver took it back (`ExecuteOrder.Cancel`). */
	Cancelled = 6,
	/** It did not go by its time (`notAfter`). */
	Expired = 7,
	/**
	 * Every unit it was given to left the game before it went: sent, its units' indices might name
	 * other units by then.
	 */
	UnitsLost = 8,
	/** Its owner gave its units another order in its place (`replaces`). */
	Replaced = 9,
	/**
	 * Its units were someone else's for the moment (`OrderPolicy`): the player's pause after their
	 * own order, another script's turn.
	 */
	Yielded = 10,
	/** The humanizer started over - a new connection, the game's end, the humanizer switched off. */
	Reset = 11,
	/**
	 * The cursor did not get to its target by the humanizer's deadline - the target off screen,
	 * a hitbox that never came up: an order that needs the cursor on its target goes with it or
	 * not at all.
	 */
	Unreachable = 12
}
