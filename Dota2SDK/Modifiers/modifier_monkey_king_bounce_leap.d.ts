// AUTO-GENERATED - do not edit.
declare class modifier_monkey_king_bounce_leap extends Modifier {
	public get InvisibilityLevel(): number
	public get DeltaZ(): number
	/**
	 * Tree Dance's leap: straight at the tree in its way, step after step of its first - taken in
	 * the tick the modifier comes - until the step that passes the tree's middle; neither pace nor
	 * time is the data's. The tree is the one within the ability's `range` nearest the line of the
	 * leap. Primal Spring's leap comes by the same modifier, at about `spring_leap_speed`, to a
	 * point shown only as it lands: a first step nearer that pace than `leap_speed` is told apart,
	 * and nothing is laid for it.
	 */
	public CreateMotion(): Nullable<Motion>
}
