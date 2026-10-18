// AUTO-GENERATED - do not edit.
declare class invoker_ice_wall extends invoker_spell_extends {
	/**
	 * The wall is aimed by Invoker's facing and the glacier as a vector: see `IceWallStrategy` and
	 * `GlacierStrategy`.
	 */
	public get PredictionStrategy(): IPredictionStrategy
	/** The wall stands by Quas. */
	protected get DurationLevel(): number
	/** How far ahead of Invoker, across his facing, the middle of the wall rises. */
	public get PlaceDistance(): number
	/** The wall's length from end to end, a talent or Aghanim's counted. */
	public get WallLength(): number
	/** The wall's width across, a talent or Aghanim's counted. */
	public get WallWidth(): number
	/**
	 * How far from Invoker the glacier may be cast, as a vector: none without the Quas variant
	 * of Aghanim's Scepter, the only one that makes the wall a glacier (`IsGlacier`).
	 */
	public get GlacierRange(): number
	/** Whether the wall is a glacier cast as a vector: the Quas variant of Aghanim's. */
	public get IsGlacier(): boolean
	/** Seconds after the cast the glacier starts to rise at its point. */
	public get GlacierDelay(): number
	/** How fast the glacier grows from its point along its line, in units a second. */
	public get GlacierSpeed(): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseCastRangeForLevel(level: number): number
}
