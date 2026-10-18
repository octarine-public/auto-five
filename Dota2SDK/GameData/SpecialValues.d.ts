// AUTO-GENERATED - do not edit.
/**
 * Where a formula of an ability's class reads the special values of its game data from: a unit's
 * ability as it stands - its level, its owner's talents, Aghanim's Scepter and Shard - or the data
 * itself at the most it reaches (`TopSpecialValues`), before any unit carries the ability.
 */
interface ISpecialValues {
	readonly AbilityData: AbilityData
	readonly OwnerHasScepter: boolean
	readonly OwnerHasShard: boolean
	GetSpecialValue(specialName: string, level: number): number
}
