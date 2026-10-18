// AUTO-GENERATED - do not edit.
declare class Creep extends Unit {
	public readonly Index: number
	public Lane: MapArea
	public PredictedIsWaitingToSpawn: boolean
	public readonly BaseHPRegen: number
	public get HPRegen(): number
	public get IsEidolon(): boolean
	public get IsLaneCreep(): boolean
	public get IsNeutral(): boolean
	public get IsSuperCreep(): boolean
	public get IsMegaCreep(): boolean
	public get IsDeniable(): boolean
	public get RingRadius(): number
	protected get UnitHealthBarSize(): Vector2
	protected get UnitHealthBarPositionCorrection(): Vector2
	/**
	 * A lane creep heads for the next corner of its lane while it walks; one that stands - in
	 * a fight, held by a block, waiting out a stun - heads nowhere until it moves again, and
	 * anything else follows its orders.
	 */
	protected get MovementDestination(): Nullable<Vector3>
	public TryAssignLane(): void
}
