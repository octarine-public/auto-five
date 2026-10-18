// AUTO-GENERATED - do not edit.
/**
 * A teleport the game remembers for the extra channel time of the ones after it: the server's
 * `CDOTA_TeleportTimerManager` keeps each scroll teleport of a team for 25 seconds from the cast
 * (`m_vecTrackedTeleports`: landing point, expiry, whether it went to an outpost).
 */
declare class PortalPoint {
	public readonly StartPosition: Vector3
	public readonly EndPosition: Vector3
	/** Twice the scroll's `maximum_distance` (800): how near a remembered landing has to be. */
	public static readonly CheckDistance = 1600
	/** Twice the 250 a scroll may land from an outpost. */
	public static readonly OutpostCheckDistance = 500
	public IsValid: boolean
	public IsOutpost: boolean
	public Team: Team
	public RecentTime: number
	public readonly CreateTime: number
	public InternalSkipIteration: boolean
	public InternalSkipEmitNotify: boolean
	public get IsExpired(): boolean
	public get Caster(): Nullable<Unit>
	protected UpdateData(caster: Nullable<Unit>, endPosition: Vector3): void
}
