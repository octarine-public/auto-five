// AUTO-GENERATED - do not edit.
declare class obsidian_destroyer_astral_imprisonment extends Ability implements INuke {
	/** The prison lasts `prison_duration`. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/** The prison takes the unit out of the game: out of reach, doing nothing. */
	public get AppliesUnitState(): bigint
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit): number
}
