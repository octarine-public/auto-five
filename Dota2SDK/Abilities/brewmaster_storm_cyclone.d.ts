// AUTO-GENERATED - do not edit.
declare class brewmaster_storm_cyclone extends Ability {
	/** The longest lift: `duration_unit`, a unit not a hero's; a hero's is `duration_hero` (`GetAppliedDuration`). */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/** The cyclone lifts a hero for `duration_hero`, any other unit for `duration_unit`. */
	public GetAppliedDuration(target: Unit): number
	public get AppliesUnitState(): bigint
}
