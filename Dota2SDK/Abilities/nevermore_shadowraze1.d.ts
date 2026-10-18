// AUTO-GENERATED - do not edit.
declare class nevermore_shadowraze1 extends Ability implements INuke {
	/** A raze is aimed by Shadow Fiend's facing: see `ShadowrazeStrategy`. */
	public get PredictionStrategy(): IPredictionStrategy
	public get UsesRotation(): boolean
	public IsNuke(): this is INuke
	public GetBaseCastRangeForLevel(level: number): number
	public GetCastRangeForLevel(level: number): number
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
}
