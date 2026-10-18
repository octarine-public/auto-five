// AUTO-GENERATED - do not edit.
/**
 * Eul's Scepter of Divinity: a cyclone on an enemy or on its owner. The game data calls its targets
 * custom; in the game it takes an enemy hero or creep and the owner himself, and the unit in the
 * cyclone is invulnerable and does nothing until it drops - the server sends INVULNERABLE and
 * STUNNED with `modifier_eul_cyclone`.
 */
declare class item_cyclone extends Item {
	protected DurationFrom(values: ISpecialValues, level: number): number
	public get AppliesUnitState(): bigint
	public TargetTeamOf(): DOTA_UNIT_TARGET_TEAM
	public TargetTypeOf(): DOTA_UNIT_TARGET_TYPE
}
