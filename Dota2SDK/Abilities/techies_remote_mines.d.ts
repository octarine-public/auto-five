// AUTO-GENERATED - do not edit.
declare class techies_remote_mines extends Ability {
	/** The mines' blast: `radius`, `radius_scepter` with Aghanim's Scepter. */
	public GetBaseAOERadiusForLevel(level: number): number
	/** A mine's damage: `damage`, `damage_scepter` with Aghanim's Scepter. */
	public GetBaseDamageForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	protected DurationFrom(values: ISpecialValues, level: number): number
	public GetBaseActivationDelayForLevel(level: number): number
}
