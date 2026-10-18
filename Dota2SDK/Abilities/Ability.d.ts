// AUTO-GENERATED - do not edit.
declare class Ability extends Entity implements IPredictionProfile {
	public readonly AbilityData: AbilityData
	public readonly AnimTime: number
	public readonly IsInIndefiniteCooldown: boolean
	public readonly MaxLevelOverride: number
	public readonly IsActivated: boolean
	public readonly AltCastState: boolean
	public readonly IsAutoCastEnabled: boolean
	public readonly IsCooldownFrozen: boolean
	public readonly IsReplicated: boolean
	public readonly IsStolen: boolean
	public readonly NetworkedManaCost: number
	public readonly OverrideCastPoint: number
	public readonly CastStartTime: number
	public readonly IsToggled: boolean
	public readonly DirtyButtons: number
	public readonly GrantedByFacet: boolean
	public readonly IsStealable: boolean
	public readonly HeroFacetKey: number
	public readonly ReflectionSourceAbility: number
	public readonly HiddenAbilityForDisplay: number
	public Level: number
	public IsEmpty: boolean
	public IsAbility: boolean
	public IsHidden: boolean
	public ChannelStartTime: number
	public AbilityChargeRestoreTimeRemaining: number
	/** @deprecated use by index */
	public AbilitySlot: EAbilitySlot
	/** Profile version of this ability; grows with level, scepter, shard, facet and talents. */
	public readonly Prediction: AbilityPrediction
	/** @private NOTE: this is internal field, use IsInAbilityPhase */
	public IsInAbilityPhase_: boolean
	public IsInAbilityPhaseChangeTime: number
	/** @private NOTE: this is internal field, use Owner or Cooldown */
	public Cooldown_: number
	public CooldownChangeTime: number
	/**
	 * How much the server takes off this cooldown at each of its counts, as the last count it
	 * showed; 0 until it has shown one. It counts a cooldown down in steps and takes a cast only
	 * once a count reads 0, so a count it showed above 0 holds for a step (`Cooldown`).
	 */
	public CooldownStep: number
	/** @private NOTE: this is internal field, use CooldownRestore */
	public CooldownRestore_: number
	public CooldownRestoreTime: number
	/**@deprecated */
	public readonly ProjectilePath: Nullable<string>
	/**
	 * The shape prediction places for the ability, read from its behavior, radius and speed at
	 * the moment of the call: a vector cast is `Vector`, a point cast with a radius is `Line`
	 * when it travels, `Cone` when it widens, `Circle` otherwise, a no-target cast with a radius
	 * is `AreaOfEffect`, and unit targets, passives and attacks are `None`. A class overrides
	 * this only for a shape the behavior cannot tell, such as an arc.
	 */
	public get SkillShotType(): ESkillShotType
	/** Radius of the shape: the width of a line, the radius of a circle or an area of effect. */
	public get Radius(): number
	/**
	 * Distance the effect travels from the caster: the flight distance a directional ability or
	 * its class names, the cast range otherwise.
	 */
	public get Range(): number
	/** Which units the projectile stops at on its way; `None` for one that flies through everything or has none. */
	public get CollisionFlags(): CollisionFlag
	/** Whose units the projectile collides with. */
	public get CollisionTeam(): CollisionTeam
	/** The unit states the ability puts on what it hits, as a `modifierstate` mask; zero when it applies none. */
	public get AppliesUnitState(): bigint
	/**
	 * Whether the projectile hits with a flat front as wide as the effect rather than a round
	 * head: a wave reaches a unit when its front line passes it, a bolt when its head touches it.
	 */
	public get FlatFront(): boolean
	/**
	 * Units the hitting front runs ahead of the projectile the game reports; zero for one that hits
	 * where it is. A wave that widens harms from its leading edge, which stands its end radius
	 * ahead of that point.
	 */
	public get FrontLead(): number
	public get IsDodgeableProjectile(): boolean
	/** Whether the target's status resistance shortens the ability's durations; off for the few the game exempts. */
	public get IsAffectedByStatusResistance(): boolean
	/**
	 * Whether casting at an enemy unit is eaten by Linken's Sphere or sent back by Lotus Orb, as
	 * the ability stands now - its behaviour, teams and types may change with Aghanim's, a talent,
	 * a facet (`MeetsSpellBlock`).
	 */
	public get TriggersSpellBlock(): boolean
	/**
	 * As `TriggersSpellBlock`, for an ability of this class before any unit carries it, `data` its
	 * game data: read off the class's prototype.
	 * @example
	 * const urn = AbilityData.GetAbilityByName("item_urn_of_shadows")
	 * const urnClass = EntityManager.GetConstructorByName<Ability>("item_urn_of_shadows")
	 * const popsSphere = urn !== undefined && urnClass?.prototype.TriggersSpellBlockOf(urn) === true
	 */
	public TriggersSpellBlockOf(data: AbilityData): boolean
	/**
	 * Whether its effect holds what it lands on where it stands - a stun, a root, a freeze, a
	 * nightmare (`ImmobilizingStates`); not a hex, under which the unit walks: by the states it
	 * applies (`AppliesUnitState`), a constant of the class, so it answers off the class's prototype
	 * before any unit carries the ability.
	 * @example
	 * const holds = EntityManager.GetConstructorByName<Ability>("invoker_tornado")?.prototype.Immobilizes
	 */
	public get Immobilizes(): boolean
	/**
	 * Whether a cast with `behavior`, aimed at `teams` and `types`, meets Linken's Sphere and Lotus
	 * Orb: a cast at a unit, not an attack, at enemy heroes or units - unless the game data marks it
	 * as one that procs nothing (`DONT_PROC_OTHER_ABILITIES`: Urn of Shadows, Spirit Vessel). A
	 * class the data does not describe answers here, for both.
	 */
	protected MeetsSpellBlock(behavior: DOTA_ABILITY_BEHAVIOR, teams: DOTA_UNIT_TARGET_TEAM, types: DOTA_UNIT_TARGET_TYPE): boolean
	/** Seconds the cast animation holds the caster after the cast point; zero without animation data. */
	public get CastBackswing(): number
	/** Whether a cast `CastPredicted` sent is still before its cast point, where a stop order can take it back. */
	public get IsCastPending(): boolean
	/** A prediction the class runs instead of the core, built from the same primitives; `undefined` by default. */
	public get PredictionStrategy(): Nullable<IPredictionStrategy>
	/**
	 * Seconds the ability's effect holds `target`: how long it holds a unit it hits
	 * (`AppliedDuration`), cut by the target's status resistance where the game applies it.
	 */
	public GetAppliedDuration(target: Unit): number
	/**
	 * What a hit of the ability does to a unit as the ability stands, effect by effect: the unit
	 * states each takes and for how long, a push it carries (`FillEffects`). Refilled on every read.
	 * @example
	 * const effects = hex.Effects
	 * effects.LostFor(EUnitCapability.Fight) // the hex's seconds: no attack, spell or item
	 */
	public get Effects(): AbilityEffects
	/**
	 * The effects of a hit on `target` (`FillEffectsOn`): each for as long as it holds that unit -
	 * cut by its status resistance where the game applies it, and by whatever else the class counts
	 * of it, as `GetAppliedDuration` is. Refilled on every read.
	 */
	public EffectsOn(target: Unit): AbilityEffects
	public get ProjectileAttachment(): string
	public get CastDelay(): number
	public get IsInvisibility(): boolean
	/**
	 * Whether the invisibility it brings comes back after an attack or a cast reveals its bearer -
	 * the fade over again - its buff lasting its whole duration through them (`MaxDuration`):
	 * Moonlight Shadow. A Shadow Blade's walk ends with the reveal. None for what hides no one.
	 * @example
	 * const fightBuff = ability.IsInvisibility && ability.InvisibilityReturns
	 */
	public get InvisibilityReturns(): boolean
	/** NOTE: @override in child classes */
	public get ShouldBeDrawable(): boolean
	public get IsUltimate(): boolean
	public get IsBreakable(): boolean
	public get IsAttributes(): boolean
	public get CanHitSpellImmuneEnemy(): boolean
	public get CanHitSpellImmuneAlly(): boolean
	/**
	 * Seconds the ability needs before a cast can be ordered at all, beyond the order itself:
	 * Invoker crafting the spell. Zero for everything the hero can simply cast, and part of
	 * `CastTimeline.PrepareTime`.
	 */
	public get PrepareTime(): number
	public get CanBeUsable(): boolean
	/**
	 * Whether the ability can be used by the game time `time` as it stands: as `CanBeUsable`. A
	 * spell the game hides until it is readied - Invoker's - answers whether it is readied by then.
	 */
	protected CanBeUsableAt(_time: number): boolean
	public get Owner(): Nullable<Unit>
	public get OwnerHasShard(): boolean
	public get OwnerHasScepter(): boolean
	public get AbilityBehaviorMask(): DOTA_ABILITY_BEHAVIOR
	public get TargetTypeMask(): DOTA_UNIT_TARGET_TYPE
	public get TargetTeamMask(): DOTA_UNIT_TARGET_TEAM
	/**
	 * The types of unit an ability of this class may target, `data` its game data: the data's,
	 * but the class's own where the data calls them custom - Eul's Scepter takes an enemy hero or
	 * creep and its owner. It reads nothing of a unit, so it answers off the class's prototype
	 * before any unit carries the ability.
	 * @example
	 * const hex = EntityManager.GetConstructorByName<Ability>("item_sheepstick")
	 * const data = AbilityData.GetAbilityByName("item_sheepstick")
	 * const atHeroes =
	 * 	data !== undefined &&
	 * 	hex?.prototype.TargetTypeOf(data).hasMask(DOTA_UNIT_TARGET_TYPE.DOTA_UNIT_TARGET_HERO)
	 */
	public TargetTypeOf(data: AbilityData): DOTA_UNIT_TARGET_TYPE
	/**
	 * The teams an ability of this class may target, `data` its game data: the data's, but the
	 * class's own where the data calls them custom or names too few - Eul's takes enemies, Lion's
	 * Mana Drain allies too. Read off the class's prototype as `TargetTypeOf` is.
	 */
	public TargetTeamOf(data: AbilityData): DOTA_UNIT_TARGET_TEAM
	public get TargetFlagsMask(): DOTA_UNIT_TARGET_FLAGS
	public get SpellDispellableType(): SPELL_DISPELLABLE_TYPES
	public get BonusStatsMask(): EDOTASpecialBonusStats
	public get AbilityDamage(): number
	public get AbilityType(): ABILITY_TYPES
	public get IsInnate(): boolean
	public get IsDispellable(): boolean
	public get IsInnateHidden(): boolean
	/** Radius the shape ends with: the wide end of a cone when the class names it, the radius otherwise. */
	public get EndRadius(): number
	public get CastPoint(): number
	public get ActivationDelay(): number
	/**
	 * Seconds what the effect sends out as it activates flies homing on the units it took then -
	 * Starstorm's stars: those are judged where they stand as it activates and hit this much later
	 * wherever they went. Part of the cast's `TravelTime`; zero for an effect that hits what it
	 * covers.
	 */
	public get HomingTime(): number
	public get MaxChannelTime(): number
	/** Seconds the channel has run since it started. */
	public get ChannelTime(): number
	/**
	 * Seconds left until the channel runs its full time, from now - not a game time, despite the
	 * name; zero once it is over.
	 */
	public get ChannelEndTime(): number
	public get MaxCharges(): number
	public get MaxChargeRestoreTime(): number
	public get DamageType(): DAMAGE_TYPES
	public get ID(): number
	public get IsChanneling(): boolean
	public get IsInAbilityPhase(): boolean
	/**
	 * Whether it was cast and its owner winds up before it lands, past its cast point and its
	 * cooldown begun: an order to the owner now cuts it short and gives the cooldown back - Hoof
	 * Stomp. The owner is busy with it as in a cast point (`Unit.IsInAbilityPhase`). None for most.
	 * @example
	 * const busy = stomp.IsInAbilityPhase || stomp.IsWindingUp
	 */
	public get IsWindingUp(): boolean
	public get CooldownLength(): number
	public get IsCooldownReady(): boolean
	public get IsReady(): boolean
	public get BaseManaCost(): number
	public get ManaCost(): number
	public get HealthCost(): number
	public get IsGrantedByScepter(): boolean
	/** Whether Aghanim's Shard grants the ability. */
	public get IsGrantedByShard(): boolean
	public get IsItem(): boolean
	public get LevelsBetweenUpgrades(): number
	public get MaxLevel(): number
	public get RequiredLevel(): number
	public get SharedCooldownName(): string
	public get DependentOnAbility(): string
	public get AbilityImmunityType(): SPELL_IMMUNITY_TYPES
	public get TargetFlags(): number[]
	public get TargetTeam(): number[]
	public get TargetType(): number[]
	public get TexturePath(): string
	public get IsPassive(): boolean
	public get IsNotLearnable(): boolean
	public get NoTarget(): boolean
	public get IgnoreBackSwing(): boolean
	public get IsUIInnate(): boolean
	public get CooldownRestore(): number
	/**
	 * Seconds until the server takes a cast of it. The server counts a cooldown down in steps
	 * (`CooldownStep`) and takes a cast only once a count reads 0: a count it showed above 0, however
	 * little, holds until its next one, a step later.
	 */
	public get Cooldown(): number
	public get CooldownPercent(): number
	public get CooldownPercentDecimal(): number
	public get CooldownDuration(): number
	public get CooldownDurationPercent(): number
	public get CooldownDurationPercentDecimal(): number
	public get StackCount(): number
	public get Speed(): number
	/** How long its effect lasts: a Pit of Malice stands 12 s, whatever it roots a unit for. */
	public get MaxDuration(): number
	/**
	 * Seconds its effect holds a unit it hits, before status resistance: how long a stun, a root, a
	 * lift of it lasts on the unit - a Pit of Malice roots 1.8 s while it stands 12 s
	 * (`MaxDuration`). The hold of `HoldingAbility` when another ability of its owner holds for it.
	 */
	public get AppliedDuration(): number
	/**
	 * The level its durations read at: its own. A class whose values follow another level says
	 * which - an Invoker spell's, its orb's.
	 */
	protected get DurationLevel(): number
	/**
	 * The ability of its owner whose effect holds a unit this one hits, when the hold is not its
	 * own: Enchant Totem's strike stuns by Aftershock. `undefined` by default.
	 */
	protected get HoldingAbility(): Nullable<string>
	public get MaxCooldown(): number
	public get BaseCastRange(): number
	public get CastRange(): number
	/**
	 * The farthest the caster's middle may stand from `target`'s to cast at it from where it is:
	 * within cast range of its edge for a cast at a unit, of its middle for one at a point aimed
	 * there; for one cast at nothing, the radius around the caster its effect takes, to the
	 * target's edge - `Infinity` for one that takes none, and for one cast anywhere on the map.
	 * @example
	 * const reach = Math.min(meteor.ReachOf(target), blast.ReachOf(target))
	 * const stand = target.Position.Extend2D(hero.Position, reach)
	 */
	public ReachOf(target: Unit): number
	public get AOERadius(): number
	public get MinAOERadius(): number
	public get SkillshotRange(): number
	public get IsCastRangeFake(): boolean
	public get UsesRotation(): boolean
	public get CurrentCharges(): number
	public set CurrentCharges(newVal: number)
	public get SpellAmplify(): number
	protected get CanBeCastedWhileRooted(): boolean
	protected get CanBeCastedWhileStunned(): boolean
	protected get CanBeCastedWhileSilenced(): boolean
	public GetProjectileStartingPosition(pos: Vector3, ang: QAngle, scale?: number): Vector3
	public GetMaxCooldownForLevel(level: number): number
	public GetChargeRestoreTimeForLevel(level: number): number
	public GetMaxChargesForLevel(level: number): number
	public GetMaxDurationForLevel(level: number): number
	/**
	 * The longest its effect lasts - `MaxDuration` at its best - from its game data `data`: at its
	 * top level, with every bonus the data names (Aghanim's Scepter, Shard, talents). It reads
	 * nothing of a unit, so it answers off the class's prototype before any unit carries it.
	 * @example
	 * const pit = EntityManager.GetConstructorByName<Ability>("abyssal_underlord_pit_of_malice")
	 * const data = AbilityData.GetAbilityByName("abyssal_underlord_pit_of_malice")
	 * const stands = data === undefined ? 0 : (pit?.prototype.MaxDurationOf(data) ?? 0)
	 */
	public MaxDurationOf(data: AbilityData): number
	/** Seconds its effect holds a unit it hits at `level`, before status resistance. */
	public GetAppliedDurationForLevel(level: number): number
	/**
	 * The longest its effect holds a unit it hits - `AppliedDuration` at its best - from its game
	 * data `data`: at its top level, with every bonus the data names, the longest a distance-scaled
	 * one reaches; the hold of `HoldingAbility` by that ability's data. Off the class's prototype,
	 * before any unit carries it; 0 when the data does not say.
	 * @example
	 * const impale = EntityManager.GetConstructorByName<Ability>("lion_impale")
	 * const data = AbilityData.GetAbilityByName("lion_impale")
	 * const stun = data === undefined ? 0 : (impale?.prototype.AppliedDurationOf(data) ?? 0)
	 */
	public AppliedDurationOf(data: AbilityData): number
	/**
	 * How long its effect lasts at `level`, its special values read from `values` - the ability as
	 * it stands, or its data at its best (`MaxDurationOf`): the class's formula, one for both.
	 */
	protected DurationFrom(values: ISpecialValues, level: number): number
	/**
	 * How long its effect holds a unit it hits at `level`, its special values read from `values`:
	 * how long the effect lasts (`DurationFrom`) by default. A class whose effect is not the hold -
	 * an area that stands, a stun after a lift - says how long it holds.
	 */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	/**
	 * Names the effects of a hit into `out`: one by default, the unit states the ability applies
	 * (`AppliesUnitState`) for as long as it holds a unit (`AppliedDuration`). A class whose hit
	 * brings several of lengths of their own - a push and a disarm - names each.
	 */
	protected FillEffects(out: AbilityEffects): void
	/**
	 * Names the effects of a hit on `target` into `out`: by default the unit states the ability
	 * applies for as long as it holds that unit (`GetAppliedDuration`) - a class whose hold depends
	 * on the target says so there. A class naming effects of its own (`FillEffects`) names them for
	 * a target too.
	 */
	protected FillEffectsOn(out: AbilityEffects, target: Unit): void
	/** `duration` seconds of a hold on `target`, cut by its status resistance where the game applies it. */
	protected HoldOn(target: Unit, duration: number): number
	public GetBaseCastPointForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetBaseManaCostForLevel(level: number): number
	public GetBaseHealthCostForLevel(level: number): number
	public GetCastRangeForLevel(level: number): number
	public GetBaseCastRangeForLevel(level: number): number
	/** Delay between the cast point and the effect; a class names the key value it comes from. */
	public GetBaseActivationDelayForLevel(_level: number): number
	/** Projectile speed; a class names the key value it comes from. */
	public GetBaseSpeedForLevel(_level: number): number
	/** Radius of the shape; a class names the key value it comes from, and without one the ability has no shape. */
	public GetBaseAOERadiusForLevel(_level: number): number
	public GetBaseMinAOERadiusForLevel(_level: number): number
	/** Flight distance of the effect when it is not the cast range; a class names the key value it comes from. */
	public GetBaseRangeForLevel(_level: number): number
	public GetBaseChannelTimeForLevel(level: number): number
	public GetCastDelay(unit?: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	public GetHitTime(unit: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	/**
	 * The displacement the ability's effect carries `target` through when it hits it at the game
	 * time `hitTime`, cast from `from` toward `toward`: a knockback, a pull. `undefined` for an
	 * ability that moves nothing, which is most. A caster tells the unit with `ExpectMotion` while
	 * its cast is on the way, so what lands after the push is aimed where the push leaves the
	 * target.
	 * @example
	 * const push = blast.MotionOn(enemy, hero.Position, enemy.Position, landsAt)
	 * if (push !== undefined) {
	 * 	enemy.ExpectMotion(push)
	 * }
	 */
	public MotionOn(_target: Unit, _from: Vector3, _toward: Vector3, _landsAt: number): Nullable<Motion>
	/**
	 * How a cast at `target` issued now plays out, stretch by stretch; see `CastTimeline`. The
	 * approach walks the grid to the nearest point in cast range of where a unit target will be
	 * as the walk ends - its walk, or the push, leap or lift the game shows it in - so a target
	 * carried away is met where it is left rather than chased; the turn follows the caster's turn
	 * data, and a unit target is aimed at where it will be when the effect lands. A cast at a point
	 * at a unit in a teleport catches it at the start or lands at the end as it arrives
	 * (`WaitTime`).
	 * @example
	 * const timeline = ability.GetCastTimeline(enemy)
	 * const landsAt = GameState.RawGameTime + timeline.HitTime
	 */
	public GetCastTimeline(target: Unit | Vector3, options?: ICastTimelineOptions, out?: CastTimeline): CastTimeline
	/**
	 * Whether the ability can be cast at the game time `time`: levelled and usable, off cooldown
	 * and with a charge by then, enough mana by the owner's regeneration, and no stun, hex,
	 * silence or root known to last past it that the ability does not ignore.
	 */
	public CanBeCastedAt(time: number): boolean
	/**
	 * Whether the ability may be aimed at `unit` right now: its target team, type and flags,
	 * and the unit's immunities. The game refuses an order at a unit it cannot target - one
	 * untargetable, or invulnerable (in a Tornado, a cyclone) unless the ability's flags let it
	 * target such - whenever the effect would land. Whether the effect still affects the unit
	 * when it lands is `CanHitAt`. A custom team or type - the game's code filters - lets either
	 * team and heroes and creeps by, never the caster itself: Phantom Strike, Nether Swap, Infest
	 * go at another unit. A class whose filter differs says so - its `TargetTeamOf` and
	 * `TargetTypeOf`, as Eul's Scepter's, or its own `CanTarget`.
	 */
	public CanTarget(unit: Unit): boolean
	/**
	 * Whether the effect landing at the game time `time` affects `target`: alive, not
	 * invulnerable or immune by then, not an ancient creep for one that does not affect them
	 * (`DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS`), and not behind a spell block it would trigger.
	 */
	public CanHitAt(target: Unit, time: number): boolean
	/** The prediction's timeline: `GetCastTimeline` at `target` into `out`. */
	public Timeline(target: IPredictionTarget | Vector3, out: CastTimeline, options?: ICastTimelineOptions): CastTimeline
	/** Seconds the effect needs from `from` to `to`: the projectile flight rounded up to a tick, zero without one. */
	public GetTravelTime(from: Vector3, to: Vector3): number
	/** Where the effect really lands for the placement in `output`; the target's predicted position by default. */
	public GetHitPosition(output: PredictionOutput): Vector3
	/**
	 * The shape the placement in `output` covers over time, from the profile: a line as a
	 * capsule with a running front, a cone as a trapezoid that widens as its front runs, a
	 * circle and an area as discs, a vector cast as a rectangle from the cast point along its
	 * direction. A cone with no speed of its own appears whole.
	 */
	public GetShapeTimeline(input: PredictionInput, output: PredictionOutput): IShapeTimeline
	/** Changes the prediction's input before the core runs; nothing by default. */
	public ModifyInput(_input: PredictionInput): void
	/** Changes the prediction's output after the core ran; nothing by default. */
	public ModifyOutput(_output: PredictionOutput): void
	/**
	 * Predicts one cast. The mode follows the ability's profile of this moment: a unit target
	 * gets its timeline and hit check, a point cast with a shape gets the shape placed on where
	 * the target will be, an area around the caster asks who will be inside. Without a target
	 * the best placement over every unit in reach is found.
	 * @example
	 * const output = hook.Predict(enemy)
	 * if (output.HitChance >= EHitChance.High) {
	 * 	hook.UseAbility(output.CastPosition)
	 * }
	 */
	public Predict(target?: Unit | Vector3, options?: IPredictOptions, out?: PredictionOutput): PredictionOutput
	/**
	 * Predicts and casts when the ability can be cast now and the prediction is good enough:
	 * `HitChance` at least `MinHitChance` and the shape covering at least `MinTargets` units.
	 * Returns the prediction when the order went out, `undefined` when it did not. Called again
	 * while the cast is still before its cast point, it sends no new order: it predicts afresh
	 * and takes the cast back with a stop order when the target has left what the cast covers,
	 * so a caller that calls it every tick guards its own casts.
	 * @example
	 * if (hook.CastPredicted(enemy, { MinHitChance: EHitChance.High }) !== undefined) {
	 * 	return
	 * }
	 */
	public CastPredicted(target?: Unit | Vector3, options?: IPredictOptions): Nullable<PredictionOutput>
	/**
	 * Whether `placed` - this ability's prediction at `target`, cast by it - still catches the
	 * target with the effect landing at the game time `hitAt`: the effect can hit it then, where
	 * it is predicted then is inside what the cast covers - as the effect activates, for one that
	 * homes on what it took (`HomingTime`) - and nothing the cast stops at comes first along its
	 * own line - an aim taken aside of a blocked line is judged on its own. Asked
	 * each tick of the cast point, it tells a cast that would now miss, to be taken back
	 * (`CastPredicted` does). `out` takes a fresh prediction, which reads the world anew.
	 * @example
	 * if (hook.IsInAbilityPhase && !hook.StillCatches(enemy, placed, hitAt)) {
	 * 	owner.OrderStop()
	 * }
	 */
	public StillCatches(target: Unit, placed: PredictionOutput, hitAt: number, options?: IPredictOptions, out?: PredictionOutput): boolean
	/**
	 * @description Returns the raw damage of the ability without any amplification
	 */
	public GetRawDamage(_target: Unit): number
	/**
	 * Damage the ability deals to `target` after its armor, resistances, amplification and
	 * blocks. Inside a sequence, `context` says the shields and barriers are already spent, so
	 * they are not taken off again.
	 */
	public GetDamage(target: Unit, context?: IDamageContext): number
	public UseAbility(target?: Vector3 | Entity, checkAutoCast?: boolean, checkToggled?: boolean, queue?: boolean, showEffects?: boolean): Nullable<ExecuteOrder>
	public UpgradeAbility(): ExecuteOrder | undefined
	public PingAbility(): ExecuteOrder | undefined
	public GetSpecialValue(specialName: string, level?: number, optional?: ISpecialValueOptions, checkShard?: boolean, checkScepter?: boolean): number
	public IsManaEnough(bonusMana?: number): boolean
	public HasBehavior(flag: DOTA_ABILITY_BEHAVIOR): boolean
	public HasBonusStats(flag: EDOTASpecialBonusStats): boolean
	public HasTargetFlags(flag: DOTA_UNIT_TARGET_FLAGS): boolean
	public HasTargetTeam(flag: DOTA_UNIT_TARGET_TEAM): boolean
	public HasTargetType(flag: DOTA_UNIT_TARGET_TYPE): boolean
	public CanHit(target: Unit | Vector3): boolean
	public CanBeCasted(bonusMana?: number): boolean
	public IsDoubleTap(_order: ExecuteOrder): boolean
	/**
	 * Whether the effect it lays on its target makes the target take more of the damage `ability`
	 * deals, while it lasts: cast first, the other lands harder. None for most.
	 * @example
	 * if (veil.Amplifies(meteor)) {
	 * 	veil.UseAbility(target.Position)
	 * }
	 */
	public Amplifies(_ability: Ability): boolean
	/**
	 * What its cast takes from its own caster while what it lays on it lasts (`MaxDuration`):
	 * Mask of Madness's Berserk silences its bearer - its spells, not its items. None for most.
	 * @example
	 * if ((mask.SelfLost & EUnitCapability.Cast) !== 0) {
	 * 	// cast the spells first
	 * }
	 */
	public get SelfLost(): EUnitCapability
	/**
	 * Whether a hit turns its target ethereal while it lasts - no attack hits it, it lands none: the
	 * states it lays make it immune to attacks - Ghost Scepter, Decrepify - or an Ethereal Blade's
	 * blast. None for most.
	 * @example
	 * const spoilsDuel = enemy.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_TAUNTED) && item.MakesEthereal
	 */
	public get MakesEthereal(): boolean
	/**
	 * Whether the effect it lays makes its target take more of some damage (`Amplifies`): an
	 * Ethereal Blade, a Veil of Discord - what goes ahead of the nukes it serves. None for most.
	 * @example
	 * const first = hero.Items.filter(item => item.IsAmplifier)
	 */
	public get IsAmplifier(): boolean
	/**
	 * Whether the effect it lays on a unit gathers the damage the unit takes while it lasts, to
	 * deal a share of it back as it ends - Orchid Malevolence's Soul Burn, Bloodthorn's Soul Rend:
	 * the unit taken out of reach meanwhile, into a cyclone or a tornado, takes none to gather.
	 * None for most.
	 * @example
	 * if (bloodthorn.GathersDamage) {
	 * 	// lift the target only once the silence ends
	 * }
	 */
	public get GathersDamage(): boolean
	/**
	 * Whether the buff it lays on its caster serves a fight the caster starts, cast as it begins:
	 * a debuff immunity, attack speed, a static shield, an invisibility to walk in under, damage
	 * turned back - not a heal, a restore or a save. None for most.
	 * @example
	 * const opening = hero.Items.filter(item => item.IsCombatBuff)
	 */
	public get IsCombatBuff(): boolean
	/**
	 * The attack range the buff it lays on its caster adds while it lasts - Elder Dragon Form's
	 * dragon attacks from range: how much farther the caster reaches once it is cast. None for most.
	 * @example
	 * const fightsFrom = hero.GetAttackRange(enemy, form.AttackRangeBonus)
	 */
	public get AttackRangeBonus(): number
	/**
	 * How many stacks the effect it lays on a unit builds up to: each cast adds one and renews the
	 * rest - Viscous Nasal Goo - so a cast while the effect lasts is not wasted. None for most,
	 * whose effect cast again only lasts longer.
	 * @example
	 * const castAgain = goo.MaxStacks > 0 || enemy.GetBuffByName(name) === undefined
	 */
	public get MaxStacks(): number
	/**
	 * Whether the effect it lays on a unit and the one `other` lays are one: on one unit they do
	 * not stack, the later adding nothing while the other lasts. Its own kind's always; an
	 * upgraded item and the one it is built from where the class says so - Bloodthorn and Orchid
	 * Malevolence.
	 * @example
	 * if (bloodthorn.SharesEffectWith(orchid)) {
	 * 	// wait for Orchid's silence to end before Bloodthorn's
	 * }
	 */
	public SharesEffectWith(other: Ability): boolean
	/**
	 * Whether it is an upgrade of `other` that carries its effect on in its place, the two not
	 * stacking on one unit. None for most.
	 */
	protected CarriesOn(_other: Ability): boolean
	public IsNuke(): this is INuke
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
	public IsDebuff(): this is IDebuff
	/**
	 * Whether it moves its caster where it is cast - a blink, a dash, a teleport to a unit - and
	 * that is what it is for: where it sets the caster down is `MotionOn`. None for most.
	 * @example
	 * const lands = blink.IsBlink() ? blink.MotionOn(hero, hero.Position, goal, landsAt)?.EndPosition : undefined
	 */
	public IsBlink(): boolean
	/**
	 * Whether what it is for is the kill: it is worth casting only when its damage (`GetDamage`)
	 * takes the unit's last health - Culling Blade. None for most.
	 * @example
	 * const goes = !blade.IsFinisher || blade.GetDamage(enemy) >= enemy.HP
	 */
	public get IsFinisher(): boolean
	/**
	 * How far ahead of the unit it is cast at - along that unit's facing - its effect lands:
	 * Firesnap Cookie hops its unit forward and bursts where it lands. None for most, which land
	 * on the unit.
	 * @example
	 * const landing = hero.InFront(cookie.LandsAhead)
	 */
	public get LandsAhead(): number
	public IsHealthCost(): this is IHealthCost
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
	public GetHealthCost(baseManaCost: number): number
	public GetManaCostModifier(baseManaCost: number): number
	protected GetCastPointModifier(baseCastPoint: number): number
	protected GetManaCostModifierSpellSteal(owner: Unit): number
	protected GetSpellAmpModifierSpellSteal(owner?: Nullable<Unit>): number
	protected IsAbsoluteNoDamage(source: Unit, target: Unit, damageType: DAMAGE_TYPES): boolean
}
