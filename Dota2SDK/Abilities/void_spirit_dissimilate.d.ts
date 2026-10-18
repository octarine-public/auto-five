// AUTO-GENERATED - do not edit.
/**
 * Dissimilate: Void Spirit fades into a ring of portals and comes out of the one he stands in, hurting
 * what is round it. The invulnerability of the phase is his own: it puts no state on what it hits
 * (`AppliesUnitState`) - named so, a combo would take it for a cast that takes its target away and
 * hold a Hex for it.
 */
declare class void_spirit_dissimilate extends Ability implements INuke {
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
}
