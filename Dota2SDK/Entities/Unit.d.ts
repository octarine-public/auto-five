// AUTO-GENERATED - do not edit.
declare class Unit extends Entity {
	public static IsNpcVisibleState(state: bigint[], entId: number): boolean
	public readonly BaseHPRegen: number
	public readonly ManaRegen: number
	public readonly IsAncient: boolean
	public readonly NetworkedBaseArmor: number
	public readonly NetworkedBaseMagicResist: number
	public readonly CurrentShop: DOTA_SHOP_TYPE
	public readonly BKBChargesUsed: number
	public readonly AeonChargesUsed: number
	public readonly RefresherUseTime: number
	public readonly RefresherLastCooldown: number
	public readonly NetworkedBaseDayVision: number
	public readonly DeathTime: number
	public readonly HasStolenScepter: boolean
	public readonly HasUpgradeableAbilities: boolean
	public readonly IsDominatable: boolean
	public readonly CanBeRespawn: boolean
	public readonly BaseDamageMin: number
	public readonly BaseDamageMax: number
	public readonly AttackDamageMin: number
	public readonly AttackDamageMax: number
	public readonly IsMoving: boolean
	public readonly IsPhantom: boolean
	public readonly IsSummoned: boolean
	public readonly LastAttackTime: number
	public readonly LastDealtDamageTime: number
	public readonly NetworkBaseMoveSpeed: number
	public readonly NetworkBaseAttackRange: number
	public readonly NetworkBaseAttackTime: number
	public PredictedIsWaitingToSpawn: boolean
	public Mana: number
	public readonly MaxMana: number
	public readonly NetworkedBaseNightVision: number
	public readonly TauntCooldown: number
	public readonly TauntCooldown2: number
	public readonly XPBounty: number
	public readonly XPBountyExtra: number
	public readonly GoldBountyMin: number
	public readonly GoldBountyMax: number
	public readonly HealthBarOffsetOverride: number
	public HealthBarOffset_: Nullable<number>
	public readonly NetworkActivity: GameActivity
	public NetworkActivityPrev: GameActivity
	public NetworkActivityStartTime: number
	public readonly NetworkSequenceIndex: number
	public NetworkSequenceIndexPrev: number
	public SequenceParity: number
	public SequenceParityPrev: number
	public readonly StartSequenceCycle: number
	public readonly OwnerPlayerID: number
	public readonly Parity: number
	public readonly NetworkAttackDamageBonus: number
	public readonly UnitType: number
	public readonly AbilityPoints: number
	public readonly LastDispellTime: number
	public readonly RefresherChargesUsed: number
	public readonly TotalAbilityPoints: number
	/** @private NOTE: this is internal field use LastDamageTime */
	public LastDamageTime_: number
	public readonly ScepterUpgradeID: number
	public readonly ShardUpgradeID: number
	public Level: number
	public Agility: number
	public Intellect: number
	public Strength: number
	public TotalAgility: number
	public BaseTotalIntellect: number
	public TotalStrength: number
	public AttackCapabilities: number
	public UnitStateNetworked: bigint
	public IsWaitingToSpawn: boolean
	/** @private NOTE: this is internal field, use Spawner */
	public Spawner_: number
	public Spawner: Nullable<NeutralSpawner>
	public LastActivity: GameActivity
	public LastActivitySequenceVariant: number
	public LastAnimationStartTime: number
	public LastAnimationEndTime: number
	public LastAnimationRawCastPoint: number
	public LastAnimationCastPoint: number
	public LastAnimationPlaybackRate: number
	public LastAnimationIsAttack: boolean
	public LastAnimationCasted: boolean
	public IsInAnimation: boolean
	public LastGestureActivity: GameActivity
	public LastGestureSequenceVariant: number
	public LastGesturePlaybackRate: number
	public AttackTimeAtLastTick: number
	public AttackTimeLostToLastTick: number
	public YawVelocity: number
	public IsVisibleState: boolean
	public IsAttacking: boolean
	/**
	 * The last game time the enemy team caught sight of the unit: the game re-sends a unit's
	 * modifiers on the tick a team it was hidden from starts seeing it, and on no other - it
	 * tells neither how long they keep seeing it nor when they stop.
	 */
	public IsVisibleForEnemiesLastTime: number
	public IsRoshan: boolean
	public IsCourier: boolean
	public IsHero: boolean
	public IsSpiritBear: boolean
	public IsCreep: boolean
	public IsTower: boolean
	public IsOutpost: boolean
	public IsBuilding: boolean
	public IsUnit: boolean
	public IsVisibleForTeamMask: number
	public UnitData: UnitData
	public IsTrueSightedForEnemies: boolean
	public HasModifierVisibleForEnemies: boolean
	/**
	 * Whether a viewer of the enemy team whose place we know sees the unit now and it is not
	 * invisible to them (`VisionSDK.EnemySees`). Kept for the local team's units; a viewer hidden
	 * from us is not in it.
	 */
	public IsInEnemySight: boolean
	public HasScepterModifier: boolean
	public HasShardModifier: boolean
	public CanBeHealed: boolean
	/** @private NOTE: this is internal field use Name */
	public UnitName_: string
	public PlayerID: number
	public HPRegenCounter: number
	public IsControllableByPlayerMask: bigint
	/** @private NOTE: this is internal field use MyWearables */
	public MyWearables_: number[]
	public MyWearables: Wearable[]
	/** @private NOTE: this is internal field use OwnerNPC */
	public OwnerNPC_: number
	/** @description The owner of the Unit. (example: Spirit Bear) */
	public OwnerNPC: Nullable<Unit>
	public readonly Buffs: Modifier[]
	public readonly Inventory: Inventory
	public readonly ModifierManager: UnitModifierManager
	/** Position history, velocity and the ability version of this unit; updated once per tick. */
	public readonly Prediction: UnitPrediction
	public readonly Spells_: number[]
	public readonly Spells: Nullable<Ability>[]
	public readonly TotalItems_: number[]
	public readonly TotalItems: Nullable<Item>[]
	public readonly TPEndPosition: Vector3
	public readonly TPStartPosition: Vector3
	protected readonly ReplicatingOtherHeroModel_: number
	public get Armor(): number
	public get ArmorType(): ArmorType
	public get HPRegen(): number
	public get AttacksPerSecond(): number
	public get AttackAnimationPoint(): number
	public get AttackHasteFactor(): number
	public get AttackPoint(): number
	public get AttackBackswing(): number
	/** @deprecated Use SecondsPerAttack */
	public get AttackRate(): number
	public get AttackSpeed(): number
	public get ReplicatingOtherHeroModel(): Nullable<Unit>
	public get AttackDamageClassType(): AttackDamageType
	public get AttackDamageAverage(): number
	/**
	 * How fast this unit's attack projectile flies, the bonuses its modifiers add counted in.
	 * A field on the way can still slow it down or hurry it: that is `ProjectileSpeedFactor`.
	 */
	public get AttackProjectileSpeed(): number
	public get BaseAttackTime(): number
	public get BaseAttackRange(): number
	public get BaseAttackSpeed(): number
	public get BaseAttackSpeedIncrease(): number
	public get BaseAttackProjectileSpeed(): number
	public get BaseAttackAnimationPoint(): number
	public get BaseTurnRate(): number
	public get BaseMoveSpeed(): number
	public get BaseArmor(): number
	public get BaseBonusArmor(): number
	public get BonusArmorPerAgility(): number
	public get BaseMagicalResist(): number
	public get DayVisionRange(): number
	public get LastDamageTime(): number
	public get MoveSpeed(): number
	/**
	 * Whether a slow takes some of the unit's move speed: it walks slower than it would unslowed.
	 * @example
	 * const caught = enemy.IsSlowed || enemy.ImmobileUntil > GameState.RawGameTime
	 */
	public get IsSlowed(): boolean
	/**
	 * The share of its move speed the unit's slows take, `0..1`: 0 unslowed, 0.4 walking at 60%
	 * of the speed it would have unslowed.
	 * @example
	 * const crawling = enemy.SlowShare >= 0.4
	 */
	public get SlowShare(): number
	/**
	 * Velocity over the last server tick in units per second, derived from networked positions;
	 * zero while the unit is unseen or has just jumped.
	 */
	public get Velocity(): Vector3
	public get MagicalDamageResist(): number
	/** @deprecated Use MoveSpeed */
	public get Speed(): number
	public get SecondsPerAttack(): number
	public get StatusResistance(): number
	public get SpellAmp(): number
	public get SpellAmpTarget(): number
	public get EffSpellAmp(): number
	public get EffSpellAmpTarget(): number
	public get TotalIntellect(): number
	public get NightVisionRange(): number
	public get VisionRange(): number
	/** @deprecated Use DayVisionRange */
	public get DayVision(): number
	/** @deprecated Use NightVisionRange */
	public get NightVision(): number
	/** @deprecated Use VisionRange */
	public get Vision(): number
	public get Color(): Color
	public get MovementTurnRate(): number
	/**
	 * Returns a boolean value indicating if the Unit is a clone.
	 * @returns {boolean}
	 */
	public get IsClone(): boolean
	/**
	 * @description Determines if the instance is the current player's hero.
	 * @returns {boolean}
	 */
	public get IsMyHero(): boolean
	public get IsMovementImpaired(): boolean
	public get GoldBountyAverage(): number
	public get IsIllusion(): boolean
	/** @description e.g: Terror Blade conjure image */
	public get IsReflection(): boolean
	public get IsSuppressCrit(): boolean
	public get IsStrongIllusion(): boolean
	/** @deprecated use IsIllusion or IsStrongIllusion */
	public get IsHiddenIllusion(): boolean
	public get CanReincarnate(): boolean
	public get CanUseAllItems(): boolean
	public get IsFountainInvulnerable(): boolean
	public get IsTempestDouble(): boolean
	/** @deprecated use IsChargeOfDarkness */
	public get IsCharge(): boolean
	public get IsChargeOfDarkness(): boolean
	public get IsLinkensProtected(): boolean
	public get CanBeMainHero(): boolean
	public get IsRooted(): boolean
	public get IsCommandRestricted(): boolean
	public get CanUseBackpack(): boolean
	public get IgnoreMoveAndAttackOrders(): boolean
	public get IsUnslowable(): boolean
	public get IsDisarmed(): boolean
	public get IsAttackImmune(): boolean
	public get IsSilenced(): boolean
	public get IsMuted(): boolean
	public get IsAttacksAreMelee(): boolean
	public get IsStunned(): boolean
	public get IsNightmared(): boolean
	public get IsHexed(): boolean
	public get IsPassiveDisabled(): boolean
	public get IsTethered(): boolean
	public get IsInvisible(): boolean
	public get IsNoTeamMoveTo(): boolean
	public get IsInvulnerable(): boolean
	public get IsUntargetable(): boolean
	public get IsMagicImmune(): boolean
	public get IsDebuffImmune(): boolean
	public get IsDeniable(): boolean
	public get IsAttackReady(): boolean
	/**
	 * Whether the unit cannot attack whenever its swing comes: invulnerable, disarmed, deaf to
	 * orders, or with no attack at all - a Proximity Mine, a ward, a courier. `NO_ATTACK` is the
	 * capability 0, no bit a mask could hold: it is the capability itself, not a flag of it.
	 * @example
	 * if (!summon.IsAttackImpaired) {
	 * 	summon.AttackTarget(enemy)
	 * }
	 */
	public get IsAttackImpaired(): boolean
	public get HasAegis(): boolean
	public get HasIntellect(): boolean
	public get HasNoHealthBar(): boolean
	public get HasNoCollision(): boolean
	/**
	 * Whether ground units have to walk around this one: false for flyers, for units without
	 * collision, and for dummies such as the announcer.
	 */
	public get BlocksPathing(): boolean
	public get IsBlind(): boolean
	public get IsTrueSightImmune(): boolean
	public get IsInFadeTime(): boolean
	public get IsControllableByAnyPlayer(): boolean
	/** @deprecated */
	public get IsRangeAttacker(): boolean
	public get HasShard(): boolean
	public get HasScepter(): boolean
	public get HasInventory(): boolean
	public get HealthBarOffset(): number
	public get WorkshopName(): string
	public get InvisibilityLevel(): number
	public get IsControllable(): boolean
	public get IsMelee(): boolean
	public get IsRanged(): boolean
	public get IsSpawned(): boolean
	public get ManaPercent(): number
	public get ManaPercentDecimal(): number
	public get MinimapIcon(): string
	public get MinimapIconSize(): number
	/** The networked unit states plus the ones expected after the local player's own casts (`ExpectState`). */
	/**
	 * @internal `motion` set the unit down while it is out of sight - a lift, a push: it is where the
	 * motion left it, a hint of it as a particle of its cast is, its way from there unknown.
	 */
	public SetDownUnseen(motion: Motion): void
	/**
	 * @internal `buff` came on the unit while it is out of sight, the server sending its states no
	 * more: the ones it brings are taken as on - a cyclone lifting a Riki who fades in it makes him
	 * invulnerable. The server's mask replaces them once the unit is seen again.
	 */
	public TakeStatesOf(buff: Modifier): void
	/**
	 * @internal `buff` left the unit while it is out of sight, the server sending its states no
	 * more: the ones it alone brought go with it - a cyclone ended under an invisible Riki leaves
	 * him invulnerable no longer. The server's mask replaces them once the unit is seen again.
	 */
	public ForgetStatesOf(buff: Modifier): void
	public get UnitStateMask(): bigint
	public get UnitState(): modifierstate[]
	public get IsGhost(): boolean
	public get IsEthereal(): boolean
	public get CanUseAbilitiesInInvisibility(): boolean
	public get Items(): Item[]
	public get HullRadius(): number
	public get CollisionPadding(): number
	public get PaddedCollisionRadius(): number
	public get ProjectileCollisionSize(): number
	public get PrimaryAttribute(): Attributes
	/** @deprecated use PrimaryAttribute */
	public get PrimaryAtribute(): Attributes
	public get IsRotating(): boolean
	public get IsChanneling(): boolean
	/**
	 * Whether the unit is busy with a cast an order would cut short: one of its spells in its cast
	 * point, or winding up after it (`Ability.IsWindingUp`) - Hoof Stomp.
	 */
	public get IsInAbilityPhase(): boolean
	public get PhysicalDamageResist(): number
	public get Name(): string
	/**
	 * Game time the unit's position was last known: now while it is seen; while it is not, its last
	 * sighting, or a hint of it since - a particle of its cast, a teleport, a fog position a script
	 * set (maphack's, `LastPredictedPositionUpdate`).
	 * @example
	 * const unseenFor = GameState.RawGameTime - enemy.SeenAt
	 */
	public get SeenAt(): number
	/**
	 * Whether the unit, unseen, still walks the course it was last seen on: no hint placed it
	 * since it went out of sight, which would leave its way from there unknown, and our sight did
	 * not rule it out - walked on, it would have come into a cell we see (`CourseRuledOut`).
	 */
	public get CourseKnown(): boolean
	/**
	 * Changes of course per second the unit is expected to make - starts, stops and turns of its
	 * walk - as it was seen to make them of late: high for one that jukes, low for one that walks
	 * its way. A skill shot reads from it how likely the unit keeps its course until it lands.
	 * @example
	 * const keepsCourse = Math.exp(-enemy.CourseChangeRate * hitTime)
	 */
	public get CourseChangeRate(): number
	public get RealPosition(): Vector3
	/**
	 * Where the unit is: while seen, where the server puts it; while not, where it was last known
	 * (`PredictedPosition`) - its last sighting, or the latest hint of it since, the SDK's or a
	 * script's: a fog position set with it (`FogVisiblePosition`) is not taken over a newer hint.
	 */
	public get Position(): Vector3
	public get HasFlyingVision(): boolean
	/**
	 * Whether the unit moves over trees and cliffs as a flyer does: one with flying vision - a
	 * flyer by nature or by a modifier (`MODIFIER_STATE_FLYING`) - or one flying for pathing
	 * only (`MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY`).
	 */
	public get FliesForPathing(): boolean
	/** Whether the unit walks through trees (`MODIFIER_STATE_ALLOW_PATHING_THROUGH_TREES`). */
	public get PathsThroughTrees(): boolean
	public get HasVisualShield(): boolean
	public get ShouldDoFlyHeightVisual(): boolean
	public get SlowResistance(): number
	/** @deprecated use HasVisualShield */
	public get IsShield(): boolean
	public get IsFlyingVisually(): boolean
	public get IsGloballyTargetable(): boolean
	public get ShouldUnifyOrders(): boolean
	/**
	 * The layout of a health bar split into `pips` segments on this screen, as the game lays it
	 * out: every length is the one at 768px of screen height scaled to the screen, a segment at
	 * most 8 of those wide and the bar at most 60, segments narrowing to share that but never
	 * under 4, the frame and the gap between segments 1, each rounded up. Couriers carry 2 (one
	 * per 3 HP), wards 2.
	 * @example
	 * const bar = Unit.GetPipHealthBar(2)
	 * const corner = screenPoint.Subtract(bar.PositionCorrection)
	 */
	public static GetPipHealthBar(pips: number): IPipHealthBar
	/** The health bar's size on screen, a segmented bar's ({@link GetPipHealthBar}) included */
	public get HealthBarSize(): Vector2
	/** What takes the projected health bar point ({@link HealthBarOffset}) to the bar's top-left corner */
	public get HealthBarPositionCorrection(): Vector2
	/**
	 * The projected health bar point ({@link HealthBarOffset} over `origin`, the unit's own position
	 * by default) snapped to a pixel the way the game snaps it: toward the middle of the screen.
	 * Undefined when the point is off the screen.
	 */
	public HealthBarAnchor(origin?: Vector3): Nullable<Vector2>
	/**
	 * The bar the game draws over a hero, or over a unit a player controls (a bear, a familiar, a
	 * brewling), standing on `anchor` ({@link HealthBarAnchor}): the frame, the health and mana
	 * rows, and for a hero the level box and the icon, with {@link IHeroHealthBar.Bounds} around
	 * them all. Laid out for the camera at its default distance.
	 * @example
	 * const anchor = hero.HealthBarAnchor()
	 * if (anchor !== undefined) {
	 * 	const bar = hero.GetHeroHealthBar(anchor)
	 * 	const beside = new Vector2(bar.Bounds.Right + 2, bar.Frame.y)
	 * }
	 */
	public GetHeroHealthBar(anchor: Vector2): IHeroHealthBar
	/**
	 * {@link GetHeroHealthBar} for a unit that is not there: a bar standing on `anchor`, with a mana
	 * row when `hasMana`, and the level box and the icon of a hero at `level`, none without it.
	 * @example
	 * const bar = Unit.LayHeroHealthBar(new Vector2(960, 540), true, 30)
	 */
	public static LayHeroHealthBar(anchor: Vector2, hasMana: boolean, level?: number): IHeroHealthBar
	/**
	 * Segments of the health bar, as the game splits the bar of a unit that counts attacks
	 * (Nether Ward, Tombstone, couriers…); 0 for a plain bar.
	 */
	public get HealthBarPips(): number
	/**
	 * HP an attack of `attacker`'s takes off this unit when it counts attacks rather than damage
	 * (Nether Ward, Tombstone, couriers…); undefined when attacks deal damage to it.
	 * {@link GetAttackDamage} returns it for such a target.
	 */
	public GetAttackHitDamage(attacker: Unit): Nullable<number>
	/** The health bar's size of a plain bar, by unit type */
	protected get UnitHealthBarSize(): Vector2
	/** {@link HealthBarPositionCorrection} of a plain bar, by unit type */
	protected get UnitHealthBarPositionCorrection(): Vector2
	public get HeroFacet(): string
	public get IsConvertManaCostToHPCost(): boolean
	public get IsAvoidTotalDamage(): boolean
	/** Where the unit is heading on its own account: the point of its last move order. */
	protected get MovementDestination(): Nullable<Vector3>
	/**
	 * Game time the unit's hold - the states that keep it where it stands - begins: `now` while the
	 * server shows one, else the moment the first one a cast of ours brings lands; `Infinity` when
	 * none is on it or expected. A shot landing between it and `ImmobileUntil` finds it standing.
	 */
	public get ImmobileFrom(): number
	/** Game time the unit can move again; `now` while nothing holds it. */
	public get ImmobileUntil(): number
	/**
	 * Game time until which the unit lacks every one of `capabilities`: for each, the latest end
	 * of the states taking it away (`CapabilityLosses`) - those expected of casts on their way
	 * included - and for the walk the end of a push, pull or lift carrying it; the earliest of
	 * those. `now` when it has any of them.
	 * @example
	 * if (enemy.LostUntil(EUnitCapability.Fight) > landsAt) {
	 * 	// still out of the fight when the next disable would land: chain it to the end instead
	 * }
	 */
	public LostUntil(capabilities: EUnitCapability): number
	/** Game time the unit can be hit again; the moment itself already counts. */
	public get InvulnerableUntil(): number
	/** Game time magic damage lands on the unit again. */
	public get SpellImmuneUntil(): number
	/** Game time debuffs stick to the unit again: what Black King Bar and its kin grant. */
	public get DebuffImmuneUntil(): number
	/**
	 * The threats that reach this unit within `PredictionTuning.ThreatHorizon` along its
	 * predicted path and can affect it when they land, earliest first.
	 */
	public get Threats(): Threat[]
	/**
	 * Game time the next attack animation can begin: after the backswing of the last attack, or
	 * after the attack in progress lands and its backswing runs.
	 */
	public get NextAttackTime(): number
	public AttackDamageType(target: Unit): DAMAGE_TYPES
	/**
	 * @description example: panorama/images/heroes/npc_dota_hero_windrunner_png.vtex_c
	 */
	public TexturePath(small?: boolean, team?: Team): Nullable<string>
	public IsAbsoluteNoDamage(damageType: DAMAGE_TYPES, target: Unit): boolean
	public IsMagicAttackDamage(target: Unit): boolean
	/**
	 * Whether the enemy team sees the unit: a known viewer of theirs has it in sight
	 * (`IsInEnemySight`), a modifier on it gives them its vision, or the game told that they
	 * caught sight of it within the last `seconds` (`IsVisibleForEnemiesLastTime`) - the one
	 * word on a viewer hidden from us, kept only that long since the game never tells when it
	 * looks away.
	 */
	public IsVisibleForEnemies(seconds?: number): boolean
	public GetMagicalDamageResist(ignoreMagicResist?: boolean): number
	public GetMoveSpeedModifier(baseSpeed?: number, isUnslowable?: boolean): number
	public GetAttackRangeModifier(baseAttackRange?: number): number
	public GetCastRangeBonus(baseCastRange: number): number
	public GetAttackSpeedModifier(baseAttackSpeed?: number): number
	public GetPhysicalArmorModifier(baseArmor?: number): number
	public GetPredictiveArmorModifier(target: Unit): number
	public GetPiercingArmorModifier(target: Unit): number
	public GetPhysicalDamageResist(predictiveArmor?: number): number
	/**
	 * The unit's own attack damage, before its modifiers. A swing rolls anywhere between the
	 * minimum and the maximum, so the minimum is the only number a decision that has to hold -
	 * a last hit, a deny, a kill - can be taken on, and it is what this and every damage method
	 * here answer when no roll is named.
	 */
	public GetAttackDamageBase(damageValue?: ATTACK_DAMAGE_STRENGTH): number
	public GetAttackDamageBonus(baseDamage?: number, target?: Unit): number
	public GetEffectiveIncomingDamage(target: Unit, damageType: DAMAGE_TYPES, rawDamage?: number): number
	public GetEffectiveOutgoingDamage(target: Unit, damageType: DAMAGE_TYPES): number
	public GetTimeVisionModifier(baseVision: number, isNight: boolean, ignoreFixedVision?: boolean): number
	public GetNextAttackPoint(delay: number, nth?: number): number
	public GetProjectileStartingPosition(activity: GameActivity, seqVariant: number, attackPoint: number, hasteFactor: number, pos: Vector3, ang: QAngle, scale?: number): Vector3
	public CanMove(checkChanneling?: boolean, checkAbilityPhase?: boolean): boolean
	public CanAttack(target?: Unit, checkChanneling?: boolean, checkAbilityPhase?: boolean, additionalRange?: number, checkAttackRange?: boolean): boolean
	public CanHitAttackImmune(target: Unit): boolean
	/** @deprecated - use custom logic in script */
	public HealthBarPosition(useHpBarOffset?: boolean, overridePosition?: Vector3): Nullable<Vector2>
	public GetAttackRange(target?: Entity, additional?: number, includeHull?: boolean): number
	public GetDamageBlock(damage: number, damageType: DAMAGE_TYPES, isRaw?: boolean): number
	/**
	 * The physical damage the unit's shields take off a blow before anything else. A melee hero
	 * blocks the game mode's innate amount on a share of the blows only, so `damageValue` decides
	 * how much of it counts: all of it for the minimum roll, its chance for the average, none for
	 * the maximum.
	 */
	public GetPassiveDamageBlock(damageType: DAMAGE_TYPES, damageValue?: ATTACK_DAMAGE_STRENGTH): number
	public GetEffectiveDamageResist(target: Unit, ignoreMagicAttack?: boolean, predictiveArmor?: number): number
	public GetIncomingAttackDamage(target: Unit, isRaw: boolean): number
	public GetRawAttackDamage(target: Unit, damageValueType?: ATTACK_DAMAGE_STRENGTH, critMulDamage?: number): number
	public GetAttackDamageTypeResist(target: Unit, damageType: DAMAGE_TYPES, rawDamageBase: number): number
	public GetAttackDamagePure(target: Unit, rawDamageBase: number): number
	public GetAttackDamageMagic(target: Unit, rawDamageBase: number): number
	/**
	 * The damage one attack of this unit takes off `target`: the roll `damageValue` names, the
	 * bonuses its modifiers add, the block the target's shields hold back and the target's armor,
	 * resistances and amplifications. The roll is the minimum by default, which is what a last
	 * hit is decided on; the maximum is the other end of the same swing, never what it deals.
	 * @example
	 * const landsAt = GameState.RawGameTime + hero.GetAttackLandingTime(creep)
	 * if (creep.HealthAt(landsAt, hero) <= hero.GetAttackDamage(creep)) {
	 * 	hero.AttackTarget(creep)
	 * }
	 */
	public GetAttackDamage(target: Unit, damageValue?: ATTACK_DAMAGE_STRENGTH, overrideRawDamage?: number, damageType?: DAMAGE_TYPES, predictedArmor?: number, canDamageBlockMelee?: boolean): number
	public GetDamageAmplification(source: Unit, damageType: DAMAGE_TYPES, predictiveArmor?: number, ignoreMagicResist?: boolean, ignoreMagicAttack?: boolean, rawDamage?: number): number
	public GetDamageSpellEmpower(target: Unit): number
	public VelocityWaypoint(delay: number, movespeed?: number): Vector3
	public GetItemByName(name: string | RegExp, includeBackpack?: boolean): Nullable<Item>
	public GetItemByClass<T extends Item>(class_: Constructor<T>, includeBackpack?: boolean): Nullable<T>
	public HasItemInInventory(name: string | RegExp, includeBackpack?: boolean): boolean
	/**
	 * @param flag if not exists => is Melee or Range attack
	 */
	public HasAttackCapability(flag?: DOTAUnitAttackCapability): boolean
	/**
	 * @param flag if not exists => isn't move NONE
	 */
	public HasMoveCapability(flag?: DOTAUnitMoveCapability): boolean
	public IsUnitStateFlagSet(flag: modifierstate): boolean
	public IsControllableByPlayer(playerID: number): boolean
	/**
	 * @internal
	 * @deprecated
	 */
	public ForwardNativeProperties(healthBarOffset: number): void
	/**
	 * @param fromCenterToCenter include HullRadiuses (for Units)
	 */
	public Distance(vec: Vector3 | Entity, fromCenterToCenter?: boolean): number
	/**
	 * @param fromCenterToCenter include HullRadiuses (for Units)
	 */
	public Distance2D(vec: Vector3 | Vector2 | Entity, fromCenterToCenter?: boolean): number
	public GetAbilityByName(name: string | RegExp): Nullable<Ability>
	public GetAbilityByClass<T extends Ability>(class_: Constructor<T>): Nullable<T>
	public GetBuffByName(name: string): Nullable<Modifier>
	public HasBuffByName(name: string): boolean
	public GetBuffByRegexp(regex: RegExp): Nullable<Modifier>
	public GetBuffByClass<T extends Modifier>(class_: Constructor<T>): Nullable<T>
	public GetAnyBuffByNames(names: string[]): Nullable<Modifier>
	public HasAnyBuffByNames(names: string[]): boolean
	/**
	 * @description faster (Distance <= range)
	 * @param fromCenterToCenter include HullRadiuses (for Units)
	 */
	public IsInRange(ent: Vector3 | Entity, range: number, fromCenterToCenter?: boolean): boolean
	/** ================================ Turn Time ======================================= */
	/** @deprecated */
	public GetTurnTime(angle: number | Vector3, currentTurnRate?: boolean, rotationDiff?: boolean): number
	/** @deprecated */
	public GetRotationTime(vec: Vector3, currentTurnRate?: boolean): number
	/** @deprecated */
	public TurnTime(angle: number, currentTurnRate?: boolean): number
	public TurnRate(currentTurnRate?: boolean): number
	/**
	 * `yaw` turned toward `heading` the short way round, by no more than the unit turns in
	 * `seconds` at the rate {@link TurnTime} assumes: 30 × {@link TurnRate} radians a second,
	 * without the game's turn acceleration. Both in degrees, `yaw` from -180 up; the result lies in
	 * [0, 360).
	 * @example
	 * angles.y = courier.TurnYawToward(angles.y, position.GetAngleTo(next), Math.min(dt, 0.1))
	 */
	public TurnYawToward(yaw: number, heading: number, seconds: number): number
	/**
	 * Seconds the unit needs to turn `angle` radians from its heading: to face a path only as
	 * far as walking needs when `movement`, all the way otherwise.
	 */
	public TurnTimeForAngle(angle: number, movement: boolean): number
	public TurnTimeNew(target: Vector3, movement: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	public IsInside(vec: Vector3, radius: number): boolean
	public IsManaEnough(abil: Ability): boolean
	/**
	 * Whether a Linken's Sphere blocks a targeted spell `time` seconds from now: its own sphere ready
	 * by then, or the block an ally's sphere gave it still standing then.
	 */
	public HasLinkenAtTime(time?: number): boolean
	public CalculateActivityModifiers(activity: GameActivity, ar: string[]): void
	public GetAnimationID(activity?: GameActivity, sequenceNum?: number, findBestMatch?: boolean): Nullable<number>
	public GetAnimation(activity?: GameActivity, sequenceNum?: number, findBestMatch?: boolean): Nullable<AnimationData>
	public GetAttachmentPosition(name: string, activity?: GameActivity, sequenceNum?: number, time?: number, pos?: Vector3, ang?: QAngle, scale?: number): Vector3
	public ExtendUntilWall(start: Vector3, direction: Vector3, distance: number): Vector3
	/**
	 * The share of its speed a projectile this unit fires keeps at `position`: Faceless Void's
	 * Distortion Field takes its share off an enemy attack projectile inside it, his Time Zone
	 * slows an enemy projectile and hurries his own. 1 where no field reaches the point, which
	 * is the usual answer.
	 */
	public ProjectileSpeedFactor(position: Vector3, isAttack: boolean): number
	/**
	 * Seconds a projectile of `source` flying at `speed` from `from` needs to reach this unit
	 * at `to`, its own position by default. The game moves a projectile once a tick and lands it
	 * on the first tick from which the rest of the way fits into one more step, so the flight is
	 * a whole number of ticks and one step shorter than the bare distance reads. A field that
	 * changes the projectile's speed counts over the chord it cuts out of the way, and holds the
	 * answer at `Infinity` when it leaves no speed at all.
	 * @example
	 * const flight = creep.ProjectileFlightTime(hero, hero.Position, hero.AttackProjectileSpeed)
	 */
	public ProjectileFlightTime(source: Unit, from: Vector3, speed: number, isAttack?: boolean, to?: Vector3): number
	/**
	 * Seconds a projectile of `source` at `speed`, launched at `from` in `after` seconds, needs
	 * to reach this unit while it keeps moving: the flight is solved against where this unit
	 * will be when the projectile arrives, since a projectile follows its target - one walking
	 * in is reached sooner than the shot was aimed and one walking away later.
	 * `ProjectileFlightTime` answers the same for a point that does not move.
	 * @example
	 * const flight = creep.ProjectileArrivalTime(hero, hero.Position, hero.AttackProjectileSpeed)
	 */
	public ProjectileArrivalTime(source: Unit, from: Vector3, speed: number, isAttack?: boolean, after?: number): number
	/**
	 * Where this unit is expected to be `delay` seconds from now: exact for a known motion or an
	 * own move order, walked along the heading around obstacles otherwise.
	 * @example
	 * const ahead = enemy.PredictPosition(0.6)
	 * if (ahead.Confidence >= EMovementConfidence.Straight) { ... }
	 */
	public PredictPosition(delay: number, options?: IMovementOptions, out?: MovementPrediction): MovementPrediction
	/** The route this unit is expected to walk over `duration` seconds, a point every `step` seconds. */
	public PredictPath(duration: number, step?: number, options?: IMovementOptions): Path
	/** Every cell this unit can reach within `delay` seconds, the turn it must make first included. */
	public PredictRegion(delay: number): ReachableRegion
	/**
	 * The farthest this unit can be at the game time `to` from where it is at `from`: carried by
	 * a motion, walking whenever nothing holds it, whichever way it likes.
	 * @example
	 * // How far a hero gets from where Cataclysm placed its strikes by the time they land.
	 * const reach = enemy.ReachBetween(lands - sunStrike.ActivationDelay, lands)
	 */
	public ReachBetween(from: number, to: number): number
	/**
	 * The route this unit would walk to `to`, with its own hull, flight and collision state.
	 * @example
	 * const path = hero.FindPath(InputManager.CursorOnWorld)
	 */
	public FindPath(to: Vector3, options?: IPathOptions): Nullable<Path>
	/**
	 * Seconds of walking along the route to `to`; `Infinity` without a route. A unit the map's
	 * currents speed (`PathSpeedMap`) walks with the full bonus while the route goes a current's
	 * way from its start, and the rest without any: the bonus it has now holds only while it does.
	 */
	public TimeToReach(to: Vector3, options?: IPathOptions): number
	/**
	 * Records that this unit is expected to hold `state` until the game time `until`, as right
	 * after a disable was cast at it; `UnitStateMask` counts it until the server confirms it or
	 * the time passes.
	 * @example
	 * target.ExpectState(modifierstate.MODIFIER_STATE_STUNNED, GameState.RawGameTime + stun.GetAppliedDuration(target))
	 */
	public ExpectState(state: modifierstate, until: number, showsBy?: number): void
	/**
	 * Records that this unit is expected to be carried through `motion` - a push of the local
	 * player's own on its way, as `Ability.MotionOn` gives it - so `PredictPosition` past the
	 * motion's start follows it, after any motion it is in before; the motion the game shows
	 * confirms and replaces it, and one the game never shows is dropped by itself.
	 * @example
	 * const push = blast.MotionOn(enemy, hero.Position, enemy.Position, landsAt)
	 * if (push !== undefined) {
	 * 	enemy.ExpectMotion(push)
	 * }
	 */
	public ExpectMotion(motion: Motion): void
	/** The unit is no longer expected to be carried through `motion`: the cast was cut. */
	public ForgetMotion(motion: Motion): void
	/**
	 * Game time the unit stops being in `state`: the later of the expected state and the
	 * modifiers observed to bring the networked one; `now` when it is not in the state,
	 * `Infinity` when nothing with a duration explains it.
	 */
	public StateUntil(state: modifierstate): number
	/** Whether a targeted spell landing at the game time `time` meets a Linken's Sphere or a Lotus Orb. */
	public SpellBlockAt(time: number): boolean
	/**
	 * Whether a targeted spell landing at the game time `time` meets a Linken's Sphere: up then -
	 * one spell pops it, and the next one goes through.
	 */
	public LinkenAt(time: number): boolean
	/**
	 * Whether a targeted spell landing at the game time `time` is sent back by a Lotus Orb's shell
	 * standing then: every one is, until the shell ends.
	 */
	public ReflectsAt(time: number): boolean
	/**
	 * Health at the game time `time`: the regeneration until then added, the blows on their way
	 * that land by then taken off, never past the maximum and never below zero. The blows of
	 * `except` are left out: the unit asking about its own attack does not count it twice.
	 * Those blows count at the roll `incoming`, the lowest by default, which reads the health
	 * high while several are on their way; a last hit racing other units wants the average.
	 * @example
	 * const landsAt = GameState.RawGameTime + hero.GetAttackLandingTime(creep)
	 * const left = creep.HealthAt(landsAt, hero, ATTACK_DAMAGE_STRENGTH.DAMAGE_AVG)
	 * if (left > 0 && left <= hero.GetAttackDamage(creep)) {
	 * 	hero.AttackTarget(creep)
	 * }
	 */
	public HealthAt(time: number, except?: Unit, incoming?: ATTACK_DAMAGE_STRENGTH): number
	/**
	 * Whether something keeps the unit alive through `damageType` landing at the game time
	 * `time`: Shallow Grave, Borrowed Time, False Promise, a ready Reincarnation or Aeon Disk,
	 * Ghost Scepter against physical damage.
	 */
	public PreventsDeathAt(time: number, damageType: DAMAGE_TYPES): boolean
	/**
	 * Whether `damage` of `damageType` landing at the game time `time` brings the unit down on
	 * top of the blows already on their way, with nothing keeping it alive then. Those blows
	 * count at the roll `incoming`, the lowest by default.
	 */
	public IsKillableAt(time: number, damage: number, damageType?: DAMAGE_TYPES, attacker?: Unit, incoming?: ATTACK_DAMAGE_STRENGTH): boolean
	/**
	 * Plays `abilities` on this unit in order and tells whether they kill it: each cast waits
	 * for the one before it, lands by its own timeline, spends its mana from the budget of its
	 * owner by `ManaAt`, takes the shields and barriers once, and the health regenerates until
	 * every blow lands. An ability on cooldown, out of mana or unable to affect the target by
	 * then is left out of `Used`.
	 * @example
	 * const kill = enemy.SimulateKill([laguna, dragonSlave], { WithAttack: true })
	 * if (kill.Killable) {
	 * 	laguna.UseAbility(enemy)
	 * }
	 */
	public SimulateKill(abilities: readonly Ability[], options?: IKillSimulationOptions): IKillSimulation
	/**
	 * Whether `response`, cast on this unit now, is done before `threat` lands: a blink, a
	 * Black King Bar or a cyclone answers a threat only when its cast point and activation fit
	 * before the impact.
	 */
	public CanResolve(threat: Threat, response: Ability): boolean
	/**
	 * The closest spot this unit can walk to before the earliest of `threats` lands that no
	 * threat in the store covers, with the moment the walk has to start; `undefined` when
	 * there is none in time, or when every threat is bound to this unit and walking answers
	 * none of them. The
	 * cells the grid holds as blocked never come up, so the answer does not run into trees or
	 * cliffs. A spot ahead beats one behind by the time the turn would take, and among spots
	 * equally near the one needing the smallest turn wins. A spot is taken with half a grid
	 * cell to spare beyond the threat's edge, the resolution spots are placed at, so a shape
	 * laid again a tick later does not put it back inside; when no such spot is reachable in
	 * time, one just past the edge is.
	 * @example
	 * const escape = hero.Escape()
	 * if (escape !== undefined && escape.Due) {
	 * 	hero.MoveTo(escape.Position)
	 * }
	 */
	public Escape(threats?: readonly Threat[]): Nullable<Escape>
	/** Mana at the game time `time` by the current regeneration, at most the maximum. */
	public ManaAt(time: number): number
	/**
	 * Game time the unit can move without losing an attack: the attack point of the animation
	 * it is in, `now` while idle or in backswing.
	 */
	public get CanMoveAfterAttackAt(): number
	/** Seconds the cast point or channel in progress keeps the unit from starting another cast. */
	public get CastBusyTime(): number
	/**
	 * Seconds until this unit's next attack on `target` lands, the way an attack order would
	 * play out: the attack in progress or the backswing left to wait, input lag for the local
	 * player's units, walking into range along the grid, turning, the next attack point and, for
	 * a ranged unit with `includeProjectile`, the projectile's flight to where the target will
	 * be when it arrives: the projectile follows the target, so a target walking in is reached
	 * sooner than the shot was aimed and one walking away later, and the flight is solved for
	 * that rather than aimed at where the target stands when the arrow leaves.
	 * @example
	 * const landsAt = GameState.RawGameTime + hero.GetAttackLandingTime(creep)
	 */
	public GetAttackLandingTime(target: Unit, includeProjectile?: boolean): number
	public GetPredictionPosition(delay?: number, useUntilWall?: boolean, forceMovement?: boolean): Vector3
	public ChangeFieldsByEvents(): void
	/**
	 * Casts `ability` the way its behaviour asks: its autocast or toggle switched on when asked to
	 * check them, else at nothing, at the point of `target` or at `target` itself. The order it
	 * gave; none for an ability cast in none of these ways.
	 */
	public UseSmartAbility(ability: Ability, target?: Vector3 | Entity, checkAutoCast?: boolean, checkToggled?: boolean, queue?: boolean, showEffects?: boolean): Nullable<ExecuteOrder>
	public MoveTo(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public MoveToTarget(target: Entity | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public AttackMove(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public AttackTarget(target: Entity | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastPosition(ability: Ability, position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public PurchaseItem(itemID: number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastTarget(ability: Ability, target: Entity | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastTargetTree(ability: Ability, tree: Tree | TempTree | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastNoTarget(ability: Ability, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastToggle(ability: Ability, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public CastAltToggle(ability: Ability, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public HoldPosition(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public TrainAbility(ability: Ability): ExecuteOrder
	public DropItemAtFountain(item: Item, queue?: boolean, showEffects?: boolean, slot?: DOTAScriptInventorySlot): ExecuteOrder
	public DropItem(item: Item, position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public GiveItem(item: Item, target: Entity | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public PickupItem(physicalItem: PhysicalItem | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public PickupRune(rune: Rune | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public SellItem(item: Item): ExecuteOrder
	public DisassembleItem(item: Item, queue?: boolean): ExecuteOrder
	public ItemSetCombineLock(item: Item, lock?: boolean | number, queue?: boolean): ExecuteOrder
	public TakeItemFromNeutralStash(item: Item): ExecuteOrder
	public MoveItem(item: Item, slot: DOTAScriptInventorySlot): ExecuteOrder
	public CastToggleAuto(item: Ability, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public OrderStop(queue?: boolean, showEffects?: boolean): ExecuteOrder
	public UnitTaunt(queue?: boolean, showEffects?: boolean): ExecuteOrder
	public EjectItemFromStash(item: Item): ExecuteOrder
	public CastRune(runeItem: Item | number, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public PingAbility(ability: Ability): ExecuteOrder
	public MoveToDirection(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public Patrol(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public VectorTargetPosition(ability: Ability, direction: Vector3, target?: Nullable<Entity | number>, queue?: boolean, showEffects?: boolean): ExecuteOrder
	/**
	 * Casts the vector-targeted `ability` from `position` - a point, or a unit and its point -
	 * toward `direction`: the direction's order, then the cast's, which it returns. The cast does
	 * not take the place of its own direction while both wait in the queue.
	 * @example
	 * hero.CastVectorTargetPosition(iceWall, enemy, enemy.Position.Extend2D(hero.Position, -300))
	 */
	public CastVectorTargetPosition(ability: Ability, position: Vector3 | Unit, direction: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public ItemLock(item: Item, state?: boolean): ExecuteOrder
	public OrderContinue(item: Item, queue?: boolean, showEffects?: boolean): ExecuteOrder
	public VectorTargetCanceled(position: Vector3, queue?: boolean, showEffects?: boolean): ExecuteOrder
}
