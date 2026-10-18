// AUTO-GENERATED - do not edit.
/**
 * The cross-cutting side of prediction: tuning, debugging and the threats every caster puts out. Everything about one unit or one
 * ability lives on that unit or ability.
 */
declare class CPredictionSDK {
	public readonly Tuning: PredictionTuning
	public readonly Debug: PredictionDebug
	/** Every effect on its way, from any caster; `unit.Threats` picks the ones reaching a unit. */
	public readonly Threats: ThreatStore
	/** The unit states each modifier - and the abilities that put them on - were seen to bring this session. */
	public readonly States: CStateCarriers
	constructor()
}
declare const PredictionSDK: CPredictionSDK
