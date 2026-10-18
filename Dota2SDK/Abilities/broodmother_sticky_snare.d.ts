// AUTO-GENERATED - do not edit.
/**
 * Sticky Snare, of Aghanim's Scepter: a strand `width` long cast along a vector - centred on the
 * vector's first point, along its way - formed after `formation_delay`: it roots the enemies it
 * catches for `root_duration`.
 */
declare class broodmother_sticky_snare extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public GetBaseActivationDelayForLevel(level: number): number
	/** The strand catches what crosses it: half its length either side of where it is aimed. */
	public GetBaseAOERadiusForLevel(level: number): number
}
