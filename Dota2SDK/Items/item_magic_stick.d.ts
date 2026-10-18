// AUTO-GENERATED - do not edit.
declare class item_magic_stick extends Item implements IManaRestore<Unit>, IHealthRestore<Unit> {
	public RestoresAlly: boolean
	public readonly RestoresSelf = true
	public readonly InstantRestore = true
	/** Health one charge restores. */
	public get HealthRestorePerCharge(): number
	/** Mana one charge restores. */
	public get ManaRestorePerCharge(): number
	public CanBeCasted(bonusMana?: number): boolean
	public GetManaRestore(_target: Unit): number
	public GetHealthRestore(_target: Unit): number
	public GetBaseAOERadiusForLevel(level: number): number
	public IsManaRestore(): this is IManaRestore<Unit>
	public IsHealthRestore(): this is IHealthRestore<Unit>
}
