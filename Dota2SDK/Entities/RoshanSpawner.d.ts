// AUTO-GENERATED - do not edit.
declare class RoshanSpawner extends Entity {
	public static get InitialTime(): number
	public static get TimeUntilNextMove(): number
	/** Whether Roshan is walking from one pit to the other, the move told by the day turning to night or back. */
	public IsMovingRoshan: boolean
	/**
	 * Whether the walking guess has run into ground the local team sees with no Roshan there, from
	 * the moment it waits at the edge of that vision until it has walked back into the fog for a
	 * moment: he is not where it says, so it is better not drawn meanwhile. Fog flickering at the
	 * edge of the vision neither shows it nor starts another wait.
	 */
	public IsPredictionInSight: boolean
	/** Where Roshan is taken to be on the last tick: seen, where he is; unseen, walked along the map's route. */
	public readonly RoshanPrediction: Vector3
	/** `RoshanPrediction` glided on to the current frame, for drawing between two ticks. */
	public readonly RoshanVisualPrediction: Vector3
	public readonly KillCount = 0
	public readonly LastKillerTeam: Team
	public TOPSpawner_: number
	public BOTSpawner_: number
	public readonly RoshanHandle: number
	public get Roshan(): Nullable<Unit>
	public get TOPLocation(): Vector3
	public get BOTLocation(): Vector3
	public set CustomGlowColor(_: Nullable<Color>)
	public set CustomDrawColor(_: Nullable<[Color, RenderMode]>)
	public get LocationType(): ERoshanLocation
	public get Position(): Vector3
}
