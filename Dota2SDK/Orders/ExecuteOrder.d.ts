// AUTO-GENERATED - do not edit.
declare class ExecuteOrder {
	public readonly OrderType: dotaunitorder_t
	public readonly Target: Nullable<Entity | number>
	public readonly Position: Vector3
	public readonly Ability_: Nullable<Ability | number>
	public readonly Issuers: Unit[]
	public readonly Queue: boolean
	public readonly ShowEffects: boolean
	public IsPlayerInput: boolean
	public static LastUserCmd: UserCmd
	public static readonly orderQueue: [ExecuteOrder, number, boolean, boolean][]
	public static lastMove: Nullable<[Vector3, number]>
	public static DebugOrders: boolean
	public static DebugDraw: boolean
	public static HoldOrders: number
	public static HoldOrdersTarget: Nullable<Vector3 | Entity>
	public static cameraMinimapSpaces: number
	public static cameraSpeed: number
	public static cursorSpeed: number
	public static cursorSpeedMinAccel: number
	public static cursorSpeedMaxAccel: number
	public static cursorBacklogBoost: number
	public static cursorOvershoot: number
	public static cursorReactionMs: number
	public static cursorArc: number
	public static cursorCorrectionChance: number
	public static cursorUndershoot: number
	/**
	 * Whether an order goes as it comes to the head of the humanizer's queue, ahead of the cursor,
	 * which follows; with this off, an order goes with the cursor on its target.
	 */
	public static PrefireOrders: boolean
	public static IsStandalone: boolean
	public static unsafeMode: boolean
	protected static readonly localMapList: Set<string>
	/**
	 * Orders by native CUnitOrder
	 *
	 * @param position default: new Vector3(0,0,0)
	 * @param issuer default: DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY
	 */
	constructor(OrderType: dotaunitorder_t, Target: Nullable<Entity | number>, Position: Vector3 | undefined, Ability_: Nullable<Ability | number>, Issuers: Unit[], Queue?: boolean, ShowEffects?: boolean, IsPlayerInput?: boolean)
	/**
	 * Seconds the humanizer will hold an order issued now - of `priority`, going `now` or not -
	 * before it reaches the game: the cursor glides of the orders that go before it - and, with
	 * `PrefireOrders` off, this order's own way to `target`. The one on its way counts for what is
	 * left of it, as the humanizer tells (`CursorThrough`): its reaction, its glide from where the
	 * cursor is, at the speed it has, to the point it aims at - unless this one cuts it short. Every
	 * waiting one that goes now while this one does not or ranks at least as high counts its whole
	 * glide, sped up as the cursor is while another order waits behind it, with no reaction: the
	 * cursor is moving on - to the minimap, and its wait there, for one given by a click on it. The
	 * next order goes out as the one before it is through - the humanizer takes no pause between
	 * them. The glides start where the humanizer's own cursor is
	 * and are seen through its own camera; an order that needs no cursor takes none. Zero when the
	 * humanizer is disabled or bypassed on this map. Follows the cursor model the queue runs on
	 * (peak speed, acceleration and deceleration in screen widths) without its random spread.
	 * @example
	 * const wait = ExecuteOrder.EstimateDispatchDelay(target, EOrderPriority.Attack) + GameState.InputLag
	 */
	public static EstimateDispatchDelay(target?: Vector3 | Entity, priority?: EOrderPriority, now?: boolean): number
	/**
	 * Whether a cast given to `unit` - other than `but` - which a later order would cut short has
	 * yet to show it took: still waiting in the humanizer's queue, or sent and the unit perhaps
	 * still walking or turning to it, which the game shows as nothing of the cast. Until its cast
	 * point, its channel or its cooldown shows (`Started`), its time passes or a later order of
	 * the unit cuts it short (`Lost`). A swing through a cast - an orb - is an attack, and none.
	 */
	public static CastOnItsWay(unit: Unit, but?: ExecuteOrder): boolean
	/**
	 * Moves into the wait for a cast or a channel to end every order still queued that would now
	 * cut one of its units' short - a cast of theirs given since, or begun; once a tick, before the
	 * humanizer takes the next order.
	 */
	public static HoldBack(): void
	/**
	 * How many orders wait, not sent yet: in the humanizer's queue, or for a cast or a channel of
	 * their units to end.
	 */
	public static get Unsent(): number
	/**
	 * Lets go the orders that waited for a cast or a channel to end, now that it has, and drops the
	 * waiting orders past their time; once a tick.
	 */
	public static ReleaseHeld(): void
	/**
	 * Moves the casts sent on: started once the game shows them take, lost once their time has
	 * passed or their units have left the game; once a tick.
	 */
	public static Confirm(): void
	/**
	 * Drops every order still waiting whose time (`NotAfter`) has passed, and every one whose units
	 * have all left the game.
	 */
	public static DropExpired(): void
	/**
	 * Puts at the head of the humanizer's queue the order to go next, unless the head is already
	 * on its way: of the orders not sent - each the first its units have waiting - one that goes
	 * now, then the higher priority, then the earlier given. The humanizer's, before a new head.
	 */
	public static Promote(): void
	/**
	 * Whether a script holds the humanizer's cursor on a target between its orders: it claims units
	 * (`OrderPolicy.Claim`), or raised `HoldOrders`.
	 */
	public static get Holding(): boolean
	/** What the humanizer's cursor waits on between a holding script's orders. */
	public static get AimTarget(): Nullable<Vector3 | Entity>
	/** Whether an order that goes now waits in the queue, first of its units, unsent. */
	public static get UrgentWaiting(): boolean
	/**
	 * Takes back every order given to `unit` that still waits in the queue, as `Cancel` does each;
	 * how many there were.
	 * @example
	 * ExecuteOrder.CancelQueued(hero)
	 */
	public static CancelQueued(unit: Unit): number
	/**
	 * Takes every queued order `which` picks out of the queue unsent, each dropped for `reason`;
	 * how many there were. The humanizer's when a target is lost, the cursor never gets to it or it
	 * starts over.
	 */
	public static Discard(which: (order: ExecuteOrder) => boolean, reason: EOrderDrop): number
	/**
	 * Forgets the casts sent that the game has yet to show taking, for a match that is over: the
	 * game will show none of them, and they are not settled into the next one.
	 */
	public static ForgetUnderway(): void
	public static get DisableHumanizer(): boolean
	public static set DisableHumanizer(newVal: boolean)
	/**
	 * Gives the order: to the humanizer's queue, or to the game at once when it needs no cursor or
	 * the humanizer is bypassed. The order it returns tells where it got (`Stage`).
	 *
	 * Beyond the order itself: `owner` - who gives it, the player for the player's own orders,
	 * `OrderOwner.Script` for a script that names none; `priority` - how it ranks against the
	 * waiting orders of other units, by its type when not given; `notAfter` - the game time it has
	 * to go by, dropped (`EOrderDrop.Expired`) when it has not; `now` - ahead of every waiting order
	 * that does not go now, cutting short the cursor's glide to one already sent; `replaces` - in
	 * the place of its owner's orders for the same units still waiting, when it and they need the
	 * cursor and they rank lower, or as high and of its kind but a cast (`EOrderDrop.Replaced`) - a
	 * key never takes or loses a place, a walk never takes a cast's, a cast never another cast's;
	 * `merges` - a walk or an
	 * attack that may ride a waiting order of its owner that is the same click (to one point, on
	 * one unit): its units join that order instead of a second click, its stage that order's;
	 * `keepsCast` - it waits while it would cut a cast point or a channel of its units short, or a
	 * cast of theirs still on its way to its start (`CastOnItsWay`) - an item cuts only one walking
	 * into range - and while a swing through a cast of theirs is in its attack point or waits
	 * behind one that is, going as its projectile leaves, not held by the game till its backswing
	 * is through - unless it is an escape (`EOrderPriority.Escape`). A script that names itself as
	 * the owner has its orders dropped (`EOrderDrop.Yielded`) while their units are another script's
	 * for the moment (`OrderPolicy`).
	 * @example
	 * const order = ExecuteOrder.PrepareOrder({
	 * 	orderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION,
	 * 	issuers: [hero],
	 * 	position,
	 * 	isPlayerInput: false
	 * })
	 * if (order.Stage === EOrderStage.Dropped) {
	 * 	console.log(order.DropReason)
	 * }
	 */
	public static PrepareOrder(order: {
		orderType: dotaunitorder_t
		isPlayerInput: boolean
		target?: Entity | number
		position?: Vector3
		ability?: Ability | number
		issuers?: Unit[]
		queue?: boolean
		showEffects?: boolean
		owner?: OrderOwner
		priority?: EOrderPriority
		notAfter?: number
		now?: boolean
		replaces?: boolean
		keepsCast?: boolean
		merges?: boolean
	}): ExecuteOrder
	public static Buyback(queue?: boolean, showEffects?: boolean): void
	public static Glyph(queue?: boolean, showEffects?: boolean): void
	public static CastRiverPaint(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public static PreGameAdjustItemAssigment(itemID: number, queue?: boolean, showEffects?: boolean): void
	public static Scan(position: Vector3, queue?: boolean, showEffects?: boolean): void
	public static fromObject(order: {
		orderType: dotaunitorder_t
		isPlayerInput: boolean
		target?: Entity | number
		position?: Vector3
		ability?: Ability | number
		issuers?: Unit[]
		queue?: boolean
		showEffects?: boolean
		owner?: OrderOwner
		priority?: EOrderPriority
		notAfter?: number
		now?: boolean
		replaces?: boolean
		keepsCast?: boolean
		merges?: boolean
	}): ExecuteOrder
	/**
	 * Where the order is on its way to the game: queued until it is sent or dropped; one whose units
	 * rode another order (`merges`) is where that order is.
	 * @example
	 * if (order.Stage === EOrderStage.Sent) {
	 * 	console.log(GameState.RawGameTime - order.SentAt)
	 * }
	 */
	public get Stage(): EOrderStage
	/** Why the order never reached the game; `None` while it may still, or did. */
	public get DropReason(): EOrderDrop
	/** The game time the order was handed to the game; 0 before it was. */
	public get SentAt(): number
	/** The waiting order of the same click its units rode (`merges`); none. */
	public get MergedInto(): Nullable<ExecuteOrder>
	/**
	 * A cast's, once sent: the game time it shows it took by - its cast point, its channel or its
	 * cooldown begun, a swing's projectile gone - else it is lost; moved on while the game holds it
	 * behind a swing of its unit (`Swings`). `Infinity` for an order the SDK does not follow.
	 * @example
	 * if (order.Stage === EOrderStage.Sent && GameState.RawGameTime < order.DueBy) {
	 * 	// still on its way to its start
	 * }
	 */
	public get DueBy(): number
	/** Who gave the order: the player, the script that named itself, or `OrderOwner.Script`. */
	public get Owner(): OrderOwner
	/** How it ranks against the waiting orders of other units: as given, else by its type. */
	public get Priority(): EOrderPriority
	/** The game time it has to go by; dropped when it has not. Infinite unless given. */
	public get NotAfter(): number
	/** Whether it goes ahead of every waiting order that does not. */
	public get Now(): boolean
	/**
	 * Whether it waits while it would cut a cast point or a channel of its units short, and while a
	 * swing through a cast of theirs is in its attack point or waits behind one that is.
	 */
	public get KeepsCast(): boolean
	/**
	 * Whether it cuts its units' cast point short: a walk, an attack, a stop, a cast that is not
	 * immediate; never an order queued after what they do.
	 */
	public get BreaksCast(): boolean
	/**
	 * Whether it is a swing through a cast - an orb at a unit, Frost Arrows, Glaives: an attack in
	 * the game, shown as its projectile leaves. Begun, it is not cut as an attack is: the game
	 * plays it out to its backswing's end and holds a walk, an attack or a cast its units are given
	 * in its attack point till then - their time (`DueBy`) moves on with it - while one given after
	 * its launch goes at once: one that keeps casts (`KeepsCast`) waits in the SDK for the launch.
	 * A stop or a hold ends it. A swing so held shows at its own launch, not at the one it waits
	 * behind; till it begins, a later order of its units but an item takes its place - the game
	 * keeps the last. It keeps no order of its units waiting behind it while it walks or
	 * turns to its target, though its unit walks into range for
	 * seconds - an orb from 1800 away kept a Sacred Arrow queued until Mirana was in range to swing.
	 */
	public get Swings(): boolean
	/**
	 * Whether it cuts its units' channel short: a walk, an attack, a stop, a cast that does not
	 * ignore channels; never an order queued after what they do.
	 */
	public get BreaksChannel(): boolean
	/**
	 * Takes the order back while it still waits in the queue; false once it was sent or dropped.
	 * @example
	 * const order = hero.CastPosition(sunStrike, point)
	 * if (!stillWanted) {
	 * 	order.Cancel()
	 * }
	 */
	public Cancel(): boolean
	/**
	 * pass Position: Vector3 at IOBuffer offset 0
	 */
	public toNative(): {
		OrderType: dotaunitorder_t
		Target: number
		Ability: number
		Issuers: number[]
		Queue: boolean
		ShowEffects: boolean
		Flags: number
	}
	/**
	 * Execute order with this fields
	 */
	public Execute(): void
	/**
	 * Gives the order: dropped while its units are someone else's for the moment (`OrderPolicy`);
	 * else noted as its script's turn on them, in the place of its owner's waiting orders for the
	 * same units when it replaces them, then, while it would cut a cast or a channel it keeps
	 * short, into the wait for it to end, else on its way (`PrepareOrder`).
	 */
	public ExecuteQueued(): void
	/**
	 * @internal Seconds the humanizer's cursor takes to glide from `from` to `to`, in shares of the
	 * screen, without the random spread: sped up when `queued` - another order waits behind - and
	 * otherwise from rest, its reaction first.
	 */
	public static GlideTime(from: Vector2, to: Vector2, queued: boolean): number
	protected CanBeClickHeightMapPosition(): boolean
}
