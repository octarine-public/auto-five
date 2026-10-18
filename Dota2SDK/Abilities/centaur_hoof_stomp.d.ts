// AUTO-GENERATED - do not edit.
/**
 * Hoof Stomp: cast at once, it goes on cooldown and Centaur winds up `windup_time` before the
 * stomp lands. An order given in the windup cuts it short and gives the cooldown back
 * (`IsWindingUp`).
 */
declare class centaur_hoof_stomp extends Ability {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	/** The stomp lands once the windup is through. */
	public GetBaseActivationDelayForLevel(level: number): number
	public get AppliesUnitState(): bigint
	public get IsWindingUp(): boolean
}
