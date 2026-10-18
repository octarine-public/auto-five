// AUTO-GENERATED - do not edit.
declare class item_hurricane_pike extends Item {
	public get Range(): number
	/** Seconds the push lasts. */
	public get PushTime(): number
	/** The push's speed - of the caster or an ally: its length over its time, by the data. */
	public GetBaseSpeedForLevel(level: number): number
	public GetHitTime(unit: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	/**
	 * The push a cast at `target` from `from` landing at `landsAt` gives it, from where it is by
	 * then, over `push_time`: its owner or an ally `push_length` along the way it faces, as
	 * `modifier_item_hurricane_pike_active` shows it; an enemy `enemy_length` away from `from`.
	 */
	public MotionOn(target: Unit, from: Vector3, _toward: Vector3, landsAt: number): Nullable<Motion>
}
