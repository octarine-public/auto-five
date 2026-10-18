// AUTO-GENERATED - do not edit.
declare class item_orchid extends Item {
	/** The silence lasts `silence_duration`: the data names no duration of its own. */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	/**
	 * The target takes, as the silence ends, `silence_damage_percent` of all the damage it took
	 * while silenced.
	 */
	public get GathersDamage(): boolean
	public get IsAmplifier(): boolean
	/** Cast first, any damage of `ability` lands harder: the silence gathers it. */
	public Amplifies(ability: Ability): boolean
}
