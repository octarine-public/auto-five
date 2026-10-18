// AUTO-GENERATED - do not edit.
/** Blink: Queen of Pain blinks to the point - a cast beyond its reach goes as far as it reaches that way. */
declare class queenofpain_blink extends Ability {
	public IsBlink(): boolean
	/** Where a blink cast from `from` at `toward` sets its owner down: there, or its reach that way. */
	public MotionOn(target: Unit, from: Vector3, toward: Vector3, landsAt: number): Nullable<Motion>
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
