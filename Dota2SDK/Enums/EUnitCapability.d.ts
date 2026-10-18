// AUTO-GENERATED - do not edit.
/**
 * What a unit does at its owner's will, a bit each: the controls it is under take them away
 * (`Unit.LostUntil`, `AbilityEffects.LostFor`).
 * @example
 * // out of the fight - no attack, no spell, no item - until:
 * const until = enemy.LostUntil(EUnitCapability.Fight)
 */
declare enum EUnitCapability {
	None = 0,
	/** Walking where it is sent. */
	Move = 1,
	/** Attacking. */
	Attack = 2,
	/** Casting its spells. */
	Cast = 4,
	/** Using its items. */
	Items = 8,
	/** Attacking, casting and using items: a control that takes all three away keeps it out of the fight. */
	Fight = 14,
	All = 15
}
