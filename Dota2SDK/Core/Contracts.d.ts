// AUTO-GENERATED - do not edit.
/** What path queries read from the unit they are made for. */
interface INavAgent {
	readonly HullRadius: number
	readonly CollisionPadding: number
	readonly MoveSpeed: number
	readonly HasFlyingVision: boolean
	/** Whether it moves over trees and cliffs as a flyer does (`Unit.FliesForPathing`). */
	readonly FliesForPathing: boolean
	/** Whether it walks through trees (`Unit.PathsThroughTrees`). */
	readonly PathsThroughTrees: boolean
	readonly HasNoCollision: boolean
	/** Player-controlled units plan their route again every two seconds of walking. */
	readonly IsControllableByAnyPlayer: boolean
}
/**
 * What movement prediction reads from a unit. `Unit` satisfies it structurally, so the prediction
 * core never imports the entity classes and adds no import cycle.
 */
interface IMovingBody extends INavAgent {
	/** Where the unit is, or was last seen. */
	readonly Position: Vector3
	readonly NetworkedPosition: Vector3
	readonly NetworkedRotationRad: number
	readonly YawVelocity: number
	readonly IsMoving: boolean
	readonly IsAlive: boolean
	readonly IsVisible: boolean
	readonly IsSpawned: boolean
	/** The unit states the server reports, as a `modifierstate` bit mask. */
	readonly UnitStateNetworked: bigint
	/** The modifiers on the unit right now; `Modifier` satisfies the carrier contract. */
	readonly Buffs: readonly IStateCarrier[]
	TurnRate(): number
	/** Seconds the unit needs to turn toward `target`: only as far as walking needs when `movement`. */
	TurnTimeNew(target: Vector3, movement: boolean): number
	CanMove(): boolean
	/**
	 * Game time the hold that keeps the unit where it stands begins: `now` for one the server
	 * shows, the moment it lands for one a cast of ours is on its way to bring; `Infinity` for none.
	 */
	readonly ImmobileFrom: number
	/**
	 * Game time the unit's position was last known: `now` while it is seen; while it is not, its
	 * last sighting, or a hint of it since - a particle of its cast.
	 */
	readonly SeenAt: number
	/**
	 * Whether the unit, unseen, still walks the course it was last seen on: no hint placed it
	 * since, and our sight did not rule it out.
	 */
	readonly CourseKnown: boolean
}
/**
 * What the skill-shot core reads from something lying on the ground that a projectile catches on
 * its way - a rune a Meat Hook takes; `Rune` satisfies it structurally.
 */
interface IPickup {
	readonly Position: Vector3
	readonly IsVisible: boolean
}
/** A reachable region as the skill-shot core reads it; `ReachableRegion` satisfies it. */
interface IReachable {
	readonly Count: number
	Contains(position: Vector2 | Vector3): boolean
	ArrivalTime(position: Vector2 | Vector3): number
	Coverage(shape: IShape2D, weight?: (arrival: number) => number): number
}
/**
 * What the skill-shot core reads from a unit it aims at, must not hit on the way, or casts
 * from; `Unit` satisfies it structurally.
 */
interface IPredictionTarget extends IMovingBody {
	readonly Index: number
	readonly IsValid: boolean
	readonly IsHero: boolean
	readonly IsCreep: boolean
	readonly IsBuilding: boolean
	/** Whether the unit is an ancient creep, which an ability that does not affect ancients passes by. */
	readonly IsAncient: boolean
	readonly Team: number
	/** Game time the unit can move again; `now` while nothing holds it. */
	readonly ImmobileUntil: number
	readonly InvulnerableUntil: number
	/** Changes of course per second the unit is expected to make, as it was seen to of late. */
	readonly CourseChangeRate: number
	PredictPosition(delay: number, options?: IMovementOptions, out?: MovementPrediction): MovementPrediction
	PredictRegion(delay: number): IReachable
}
/** What state attribution reads from a modifier: who it is, when it came and when it goes. */
interface IStateCarrier {
	readonly Name: string
	/** The ability that put the modifier on, as the game names it; empty for none known. */
	readonly AbilityName: string
	readonly IsValid: boolean
	readonly CreationTick: number
	/** Zero for a modifier without a duration. */
	readonly Duration: number
	readonly DieTime: number
	/** The displacement the modifier carries its bearer through; a modifier that has one ends with it. */
	readonly Motion: Nullable<Motion>
	/**
	 * The unit states the modifier class declares it brings: `undefined` when it declares none -
	 * what it brings is learned from the game - and zero for one that brings none, a push that
	 * only carries. It settles which of modifiers that arrived together brought a state.
	 */
	readonly States: Nullable<bigint>
	/** Whether the modifier class declares itself a disable, which breaks a tie between modifiers that arrived together. */
	IsDisable(): boolean
}
/** What the navigation grid reads from a unit that stands on it. */
interface INavUnit extends INavAgent {
	readonly Position: Vector3
	readonly IsBuilding: boolean
	readonly IsValid: boolean
	readonly IsAlive: boolean
	readonly IsVisible: boolean
	readonly IsSpawned: boolean
	readonly BlocksPathing: boolean
}
/** What the navigation grid reads from a tree, permanent or temporary. */
interface INavTree {
	readonly Position: Vector3
	readonly IsValid: boolean
	readonly IsAlive: boolean
	readonly IsTempTree: boolean
}
/** The owner side of an ability profile: the facet and the talent version of its unit. */
interface IProfileOwner {
	readonly HeroFacet: string
	readonly Prediction: {
		readonly AbilitiesVersion: number
	}
}
/** What ability prediction reads from an ability; `Ability` satisfies it structurally. */
interface IPredictableAbility {
	readonly Level: number
	readonly AltCastState: boolean
	readonly IsStolen: boolean
	readonly OwnerHasScepter: boolean
	readonly OwnerHasShard: boolean
	readonly Owner: Nullable<IProfileOwner>
}
