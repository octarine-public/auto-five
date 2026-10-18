// AUTO-GENERATED - do not edit.
/**
 * The bar the game draws over a hero, and over a unit a player controls (a bear, a familiar, a
 * brewling), laid out on this screen the way the game lays it out ({@link Unit.GetHeroHealthBar}).
 *
 * Rectangles are in screen pixels and hold the whole pixels the game paints for that part; a part
 * the unit does not have is a rectangle without width. {@link Bounds} holds them all, which is what
 * to stand something beside the bar against: right of the level box, left of the icon, above or
 * under the frame.
 */
declare interface IHeroHealthBar {
	/** The projected health bar point the bar stands on, snapped to a pixel the way the game snaps it */
	readonly Anchor: Vector2
	/** What one of the game's layout pixels, given at 768px of screen height, measures on this screen */
	readonly Scale: number
	/** The frame around the health and the mana rows, its coloured rim included */
	readonly Frame: Rectangle
	/** The health row at full health; {@link HealthFill} says how much of it a fraction fills */
	readonly Health: Rectangle
	/** The mana row at full mana, under {@link Health}; without width for a unit without mana */
	readonly Mana: Rectangle
	/** The level box right of the frame; without width for a unit that is not a hero */
	readonly Level: Rectangle
	/** The hero icon left of the frame; without width for a unit that is not a hero */
	readonly Icon: Rectangle
	/** Every part together: the frame, the level box and the icon */
	readonly Bounds: Rectangle
	/** The rectangle the game stretches the frame sprite of its health bar sheet over */
	readonly FrameSprite: Rectangle
	/** The rectangle the game stretches the health sprites over: the frame's, or a taller one without mana */
	readonly HealthSprite: Rectangle
	/** The rectangle the game stretches the level box sprite over, at a fraction of a pixel */
	readonly LevelSprite: Rectangle
	/** The rectangle the game stretches the icon backing sprite over, at a fraction of a pixel */
	readonly IconSprite: Rectangle
	/** Top-left corner of the level's line, {@link LevelFontTall} high */
	readonly LevelText: Vector2
	/** Height of the line the game sets the level in, ascent and descent of its face together */
	readonly LevelFontTall: number
	/** Top of the dividers the game cuts the health row with, and how far down they run */
	readonly DividerTop: number
	readonly DividerHeight: number
	/**
	 * Pixels of {@link Health} the game fills for a fraction of health, counted from its left edge
	 * @example
	 * const width = bar.HealthFill(unit.HPPercentDecimal)
	 */
	HealthFill(fraction: number): number
	/** Pixels of {@link Mana} the game fills for a fraction of mana, counted from its left edge */
	ManaFill(fraction: number): number
	/**
	 * Left edge of the 2px divider the game draws at `hp` of `maxHP` health: one every 250 up to the
	 * unit's health, every fourth darker
	 * @example
	 * for (let hp = 250; hp <= unit.HP; hp += 250) {
	 * 	const x = bar.DividerX(hp, unit.MaxHP)
	 * }
	 */
	DividerX(hp: number, maxHP: number): number
}
