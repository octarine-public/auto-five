// AUTO-GENERATED - do not edit.
declare class mirana_invis extends Ability {
	public get IsInvisibility(): boolean
	/**
	 * Moonlight Shadow stays on its bearers for `duration`, their speed and Mirana's damage up all
	 * the while: an attack or a cast takes only the invisibility, which comes back `fade_delay`
	 * after it.
	 */
	public get InvisibilityReturns(): boolean
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(_level: number): number
	/** Mirana and her allies fade `fade_delay` after the cast. */
	public GetBaseActivationDelayForLevel(level: number): number
}
