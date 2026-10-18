// AUTO-GENERATED - do not edit.
declare class modifier_kunkka_tidebringer extends Modifier {
	protected readonly CanPostDataUpdate = true
	protected readonly DeclaredFunction: Map<EModifierfunction, (params?: IModifierParams) => [number, boolean]>
	/**
	 * Whether Kunkka's swing under way is a Tidebringer cast with autocast off: its attack
	 * animation carries the `tidebringer` activity, so the bonus counts on it.
	 */
	public get IsCastSwing(): boolean
	public PostDataUpdate(): void
	/**
	 * `damage_bonus` on a swing the server arms at its start (ON_ATTACK_START in server.dll): at
	 * an enemy that is not a building, with autocast on or the swing being the cast, while
	 * Tidebringer is off cooldown and Kunkka is not broken. A swing while the cooldown runs, the
	 * one between procs, gets none.
	 */
	protected GetPreAttackBonusDamage(params?: IModifierParams): [number, boolean]
	protected UpdateSpecialValues(): void
}
