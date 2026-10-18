// AUTO-GENERATED - do not edit.
/**
 * A health bar split into segments, laid out as the game lays it out on this screen
 * ({@link Unit.GetPipHealthBar}): a black frame {@link Border} thick around the segments, the
 * frame's black also cutting them {@link Gap} apart.
 */
declare interface IPipHealthBar {
	/** The bar's size on screen, its frame included */
	readonly Size: Vector2
	/** What takes the projected health bar point ({@link Unit.HealthBarOffset}) to the bar's top-left corner */
	readonly PositionCorrection: Vector2
	/** Thickness of the frame around the segments */
	readonly Border: number
	/** Gap between two segments */
	readonly Gap: number
	/** Width of a segment; the first starts {@link Border} in from the bar's left edge */
	readonly SegmentWidth: number
	/** Height of a segment; the segments start {@link Border} down from the bar's top edge */
	readonly SegmentHeight: number
}
