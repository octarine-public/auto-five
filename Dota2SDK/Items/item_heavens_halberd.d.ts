// AUTO-GENERATED - do not edit.
declare class item_heavens_halberd extends Item {
	/** The longest disarm: of `disarm_melee` and `disarm_range`, whichever lasts. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/** A unit that attacks from range is disarmed for `disarm_range`, a melee one for `disarm_melee`. */
	public GetAppliedDuration(target: Unit): number
	public get AppliesUnitState(): bigint
}
