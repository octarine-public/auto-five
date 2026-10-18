// AUTO-GENERATED - do not edit.
declare class snapfire_firesnap_cookie extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public get ProjectileAttachment(): string
	public get CookieSpeed(): number
	public get JumpRange(): number
	/** The unit fed hops `JumpRange` forward and the cookie bursts where it lands. */
	public get LandsAhead(): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetCastDelay(unit?: Unit | Vector3, movement?: boolean, directionalMovement?: boolean, currentTurnRate?: boolean): number
	public get AppliesUnitState(): bigint
}
