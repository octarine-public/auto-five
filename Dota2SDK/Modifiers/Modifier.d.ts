// AUTO-GENERATED - do not edit.
type ModifierHandlerValue = (modifierParams?: IModifierParams) => [number, boolean]
type ModifierMapFieldHandler = Map<EModifierfunction, ModifierHandlerValue>
declare class Modifier {
	public kv: IModifier
	public static readonly DebuffHeal: string[]
	public static readonly DebuffTrueSight: Set<string>
	public static readonly DebuffVisibleForEnemies: Set<string>
	public static HasTrueSightBuff(buffs: Modifier[]): boolean
	public static HasVisibleForEnemies(buffs: Modifier[]): boolean
	public static HasScepterBuff(buffs: Modifier[]): boolean
	public static HasShardBuff(buffs: Modifier[]): boolean
	public static CanBeHealed(unit: Unit): boolean
	public static CanBeHealed(buffs: Modifier[]): boolean
	public readonly Name: string
	public readonly IsAura: boolean
	public readonly Index: number
	public readonly SerialNumber: number
	public readonly DDAbilityName: string
	public readonly CreationTick: number
	public NetworkArmor: number
	public NetworkDamage: number
	public NetworkFadeTime: number
	/**
	 * Whether the network's fade time holds a value of this modifier's own - a path's speed, a
	 * portal's damage cut, Double Edge's damage - and no fade into invisibility.
	 */
	protected readonly FadeTimeIsValue: boolean
	public NetworkBonusMana: number
	public NetworkBonusHealth: number
	public NetworkAttackSpeed: number
	public NetworkChannelTime: number
	public NetworkMovementSpeed: number
	public NetworkBonusAllStats: number
	public NetworkSubtle: boolean
	public NetworkIsActive: boolean
	public NetworkAuraWithInRange: boolean
	public NetworkActivity: number
	public CreationTime: number
	public CustomEntity: Nullable<Unit>
	public InternalStackCount: number
	public InternalDuration: number
	public AbilityLevel: number
	public IsGhost: boolean
	public IsHidden: boolean
	public IsGlobally: boolean
	public Parent: Nullable<Unit>
	public Ability: Nullable<Ability>
	public Caster: Nullable<Unit>
	/** The displacement the modifier carries its bearer through while it lasts, made by `CreateMotion` when the modifier appears. */
	public Motion: Nullable<Motion>
	public AuraOwner: Nullable<Unit>
	public IsValid: boolean
	public HasVisualShield: boolean
	public ShouldDoFlyHeightVisual: boolean
	public HasShard: boolean
	public HasScepter: boolean
	protected CanPostDataUpdate: boolean
	protected DeclaredFunction: Nullable<ModifierMapFieldHandler>
	protected CachedAbilityName: Nullable<string>
	public get StackCount(): number
	public get ForceVisible(): boolean
	public get Duration(): number
	/**
	 * How far the modifier has faded its parent into invisibility, 0 to 1, by the fade time the
	 * network gives it: none for one whose fade time holds a value of its own
	 * (`FadeTimeIsValue`).
	 */
	public get InvisibilityLevel(): number
	public get DeltaZ(): number
	public get DieTime(): number
	public get ElapsedTime(): number
	public get RemainingTime(): number
	/**
	 * Seconds the modifier still has at the game time `time`: zero once it has expired,
	 * `Infinity` for one without a duration.
	 */
	public RemainingAt(time: number): number
	public get DDModifierID(): Nullable<number>
	public get vStart(): Vector4
	public get vEnd(): Vector4
	/** The ability that put the modifier on, as the game names it; empty for none known. */
	public get AbilityName(): string
	public get IsBreakable(): boolean
	public get IsDispellable(): boolean
	public get CanHitSpellImmuneEnemy(): boolean
	public Update(force?: boolean): void
	public GetTexturePath(): string
	public IsEnemy(ent?: Entity): boolean
	/**
	 * Whether the modifier keeps its bearer alive through `damageType` right now, the way
	 * Shallow Grave, Borrowed Time or a ready Reincarnation do.
	 */
	public PreventsDeath(_damageType: DAMAGE_TYPES): boolean
	/**
	 * The displacement the modifier carries its bearer through, made once when the modifier
	 * appears: a push, a pull or a dash with its start, end and timing; `undefined` for one that
	 * moves nothing. The movement prediction of the bearer follows it while it lasts.
	 */
	public CreateMotion(): Nullable<Motion>
	/**
	 * The field the modifier changes projectiles' speed by around its bearer, made once when it
	 * appears - Faceless Void's Distortion Field, his Time Zone; `undefined` for one that changes
	 * none. The projectile prediction counts it while it lasts.
	 */
	public CreateProjectileSpeedField(): Nullable<ProjectileSpeedField>
	/** Centre a leash holds its bearer around, such as Slark or the arena; `undefined` for a modifier that is no leash. */
	public get LeashAnchor(): Nullable<Vector3>
	/** Distance from `LeashAnchor` the bearer cannot leave; zero for a modifier that is no leash. */
	public get LeashRadius(): number
	public IsBuff(): this is IBuff
	public IsDebuff(): this is IDebuff
	/**
	 * Whether the modifier keeps damaging its parent by itself while it lasts - a burn - so its
	 * parent taken out of reach meanwhile, into a cyclone or a tornado, takes none of it.
	 */
	public get IsDamageOverTime(): boolean
	/**
	 * Whether the modifier gathers the damage its parent takes while it lasts, to deal a share of
	 * it back as it ends - Orchid Malevolence's Soul Burn, Bloodthorn's Soul Rend - so its parent
	 * taken out of reach meanwhile, into a cyclone or a tornado, takes none to gather.
	 */
	public get GathersDamage(): boolean
	/**
	 * The unit states the modifier brings its parent, as its class declares them: `undefined` for
	 * a class that declares nothing - the prediction learns them from the game (`StateCarriers`) -
	 * and zero for one that brings none, a push that only carries.
	 */
	public get States(): Nullable<bigint>
	public IsDisable(): this is IDisable
	public IsShield(): this is IShield
	public IsChannel(): this is IChannel
	public OnAbilityLevelChanged(): void
	public PostDataUpdate(): void
	public ForceUpdateSpecialValues(): void
	public Remove(): boolean
	public HasTargetFlags(flag: DOTA_UNIT_TARGET_FLAGS): boolean
	public IsMagicImmune(owner?: Nullable<Unit>, ignoreFlags?: boolean): boolean
	public IsPassiveDisabled(source?: Unit): boolean
	public IsSuppressCrit(source?: Unit): boolean
	public TestSpecialValue(): void
	protected HasMeleeAttacksBonuses(source?: Unit): boolean
	/** What a modifier class notes the moment it comes on its bearer - where its caster stood; nothing by default. */
	protected OnAdded(): void
	protected AddModifier(): boolean
	/**
	 * @param specialName name of the special
	 * @param abilityName (e.g. "item_smoke_of_deceit", "item_moon_shard")
	 * @param level optional (e.g. invoker_ghost_walk#WexLevel)
	 * @return number
	 */
	protected GetSpecialValue(specialName: string, abilityName: string, level?: number, optional?: ISpecialValueOptions): number
	protected UnitModifierChanged(): void
	protected UpdateSpecialValues(): void
	protected UnitPropertyChanged(_changed?: boolean): boolean
}
