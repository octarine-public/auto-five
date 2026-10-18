// AUTO-GENERATED - do not edit.
declare class UnitPortalData {
	protected readonly CasterIndex: number
	public IsValid: boolean
	public IsCanceled: boolean
	/** Whether the teleport goes to an outpost: such teleports stack only with each other. */
	public IsOutpost: boolean
	public MaxDuration: number
	public AbilityName: string
	public readonly EndPosition: Vector3
	public readonly StartPosition: Vector3
	public get Caster(): Nullable<Unit>
	public get Target(): Nullable<Unit>
	/** Seconds of the channel left, counted from the cast. */
	public get RemainingTime(): number
	/**
	 * Whether the game counts `point` towards this teleport's extra channel time: a teleport of
	 * the same team still remembered, landing within {@link PortalPoint.CheckDistance} of this
	 * one ({@link PortalPoint.OutpostCheckDistance} for an outpost), to an outpost exactly when
	 * this one goes to one.
	 */
	public IsValidPoint(point: PortalPoint): boolean
	/** The target and both ends of the teleport. The channel keeps the time it started at. */
	public UpdateData(entIndex: Nullable<number>, startPosition: Vector3, endPosition: Vector3): void
	/**
	 * Sets the channel time to `duration` and, unless `skipIteration`, adds what the game adds
	 * for the teleports in `pointsData` it counts ({@link IsValidPoint}): 2 seconds for the
	 * first and half a second for each one after it. `pointsData` must not hold this teleport's
	 * own point yet.
	 */
	public UpdateDuration(pointsData: PortalPoint[], skipIteration?: boolean, duration?: number): void
}
