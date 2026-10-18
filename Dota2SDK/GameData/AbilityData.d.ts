// AUTO-GENERATED - do not edit.
interface ISpecialValueOptions {
	useFacet?: boolean
}
declare class AbilityData {
	public static readonly empty: AbilityData
	public static readonly globalStorage: Map<string, AbilityData>
	public static readonly ShouldBeDrawable: Set<string>
	public static DisposeAllData(): void
	public static GetAbilityByName(name: string): Nullable<AbilityData>
	public static GetAbilityNameByID(id: number): Nullable<string>
	public static GetItemRecipeName(name: string): Nullable<string>
	protected static GetAbilityIDByName(name: string): Nullable<number>
	protected static get HasDebug(): boolean
	public readonly AbilityBehavior: DOTA_ABILITY_BEHAVIOR
	public readonly AbilityType: ABILITY_TYPES
	public readonly BonusStats: EDOTASpecialBonusStats
	public readonly MaxLevel: number
	public readonly TargetFlags: DOTA_UNIT_TARGET_FLAGS
	public readonly TargetTeam: DOTA_UNIT_TARGET_TEAM
	public readonly TargetType: DOTA_UNIT_TARGET_TYPE
	public readonly SpellDispellableType: SPELL_DISPELLABLE_TYPES
	public readonly SharedCooldownName: string
	public readonly ModelName: string
	public readonly AlternateModelName: string
	public readonly DependentOnAbility: string
	public readonly IsItem: boolean
	public readonly IsGrantedByScepter: boolean
	/** Whether Aghanim's Shard grants the ability: the hero has no slot for it without the Shard. */
	public readonly IsGrantedByShard: boolean
	public readonly ID: number
	public readonly EffectName: string
	public readonly Cost: number
	public readonly IsInnate: boolean
	public readonly Purchasable: boolean
	public readonly DamageType: DAMAGE_TYPES
	public readonly LevelsBetweenUpgrades: number
	public readonly RequiredLevel: number
	public readonly AbilityImmunityType: SPELL_IMMUNITY_TYPES
	public readonly ItemDisplayCharges: boolean
	public readonly ItemHideCharges: boolean
	public readonly SecretShop: boolean
	public readonly ItemRequirements: string[][]
	public readonly ItemQuality: Nullable<string>
	public readonly ItemResult: Nullable<string>
	public readonly ItemStockTime: number
	public readonly HasShardUpgrade: boolean
	public readonly HasScepterUpgrade: boolean
	public readonly ItemIsNeutralDrop: boolean
	public readonly ItemIsNeutralActiveDrop: boolean
	/**
	 * The tier of the neutral items pool the item stands in now (`scripts/npc/neutral_items.txt`),
	 * from 1; 0 for an item no tier holds - a shop's item, or a neutral one the pool no longer has.
	 */
	public readonly NeutralTier: number
	public readonly ShouldBeSuggested: number
	/**
	 * Whether a Tempest Double gets the item with the rest of its hero's: every item the data does
	 * not mark otherwise - consumables, the gem, the bottle, the rapier are marked.
	 */
	public readonly IsTempestDoubleClonable: boolean
	public readonly SuggestPregame: boolean
	public readonly ItemSupport: boolean
	public readonly SpeciallyBannedFromNeutralSlot: boolean
	public readonly CastAnimation: Nullable<GameActivity>
	public readonly LinkedAbility: string
	public readonly ShouldBeInitiallySuggested: boolean
	public readonly ItemStockInitial: Nullable<number>
	public readonly ItemDisassembleRule: DOTA_ITEM_DISASSEMBLE
	public readonly ItemAliases: string[]
	public readonly HasCastRangeSpecial: boolean
	public readonly HasManaCostSpecial: boolean
	public readonly HasChannelTimeSpecial: boolean
	public readonly HasAbilityDamageSpecial: boolean
	public readonly HasCastPointSpecial: boolean
	public readonly HasMaxChargesSpecial: boolean
	public readonly HasChargeRestoreTimeSpecial: boolean
	public readonly HasMaxCooldownSpecial: boolean
	public readonly HasMaxDurationSpecial: boolean
	public readonly HasHealthCostSpecial: boolean
	public readonly IsBreakable: boolean
	public readonly AllowedInBackpack: boolean
	public get ShouldBeDrawable(): boolean
	public get CanHitSpellImmuneEnemy(): boolean
	public get CanHitSpellImmuneAlly(): boolean
	public get IsDispellable(): boolean
	/**
	 * Whether the HUD shows it in the innate slot, under the innate glyph rather than a picture of
	 * its own: an innate that is passive, or one the data puts in the innate UI - Hidden Gates - and
	 * not one it keeps out of it. An innate cast from the ability bar - Stone Remnant, Mischief,
	 * Invoke - shows its own.
	 * @example
	 * const icon = data.InInnateSlot ? innateGlyph : data.TexturePath
	 */
	public get InInnateSlot(): boolean
	public HasBehavior(flag: DOTA_ABILITY_BEHAVIOR): boolean
	public HasTargetTeam(flag: DOTA_UNIT_TARGET_TEAM): boolean
	public HasBonusStats(flag: EDOTASpecialBonusStats): boolean
	public HasTargetFlags(flag: DOTA_UNIT_TARGET_FLAGS): boolean
	public HasTargetType(flag: DOTA_UNIT_TARGET_TYPE): boolean
	/** The ability's icon, looked up in the game's files the first time it is read. */
	public get TexturePath(): string
	public GetTexturePath(altCastState: boolean, abilName?: string): string
	public GetSpecialValue(specialName: string, level: number, abilityName?: string): number
	/**
	 * The most the special value `specialName` reaches: at the ability's top level, with every bonus
	 * the data names for it - Aghanim's Scepter and Shard in any variant, every talent - but a
	 * facet's, one of several a hero picks between. What the ability may do at its best, before any
	 * unit carries it.
	 * @example
	 * const stun = AbilityData.GetAbilityByName("lion_impale")?.GetTopSpecialValue("duration")
	 */
	public GetTopSpecialValue(specialName: string, abilityName?: string): number
	public GetSpecialValueWithTalent(owner: Unit, specialName: string, level: number, abilityName: string, { useFacet }: ISpecialValueOptions, checkShard?: boolean, checkScepter?: boolean, isStolen?: boolean): number
	public GetCastRange(level: number): number
	public GetHealthCost(level: number): number
	public GetManaCost(level: number): number
	public GetMaxDurationForLevel(level: number): number
	public GetMaxCooldownForLevel(level: number): number
	public GetChannelTime(level: number): number
	public GetAbilityDamage(level: number): number
	public GetCastPoint(level: number): number
	public GetMaxCharges(level: number): number
	public GetChargeRestoreTime(level: number): number
}
