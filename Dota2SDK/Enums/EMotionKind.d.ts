// AUTO-GENERATED - do not edit.
declare enum EMotionKind {
	Teleport = 0,
	Knockback = 1,
	Dash = 2,
	/** Dragged toward the source: a hook. */
	Pull = 3,
	/** Taken up, swung round in the air and set down where it was taken: a tornado. */
	Lift = 4,
	/** Towed on a leash behind a unit that leads: Flaming Lasso (`TowMotion`). */
	Tow = 5,
	/**
	 * Moved while held, by what no motion of the game's describes - a lasso, a vortex, a spear: at
	 * the pace seen, until the hold ends (`CarryWatch`).
	 */
	Carry = 6
}
