// AUTO-GENERATED - do not edit.
declare class rubick_telekinesis extends Ability {
	/**
	 * The lift: the target is held up for `lift_duration` and let go as it lands; `stun_duration`
	 * stuns the enemies round where it lands, not the target.
	 */
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public readonly StartLocation: Vector3
	public GetBaseAOERadiusForLevel(level: number): number
	public get AppliesUnitState(): bigint
}
