// AUTO-GENERATED - do not edit.
/**
 * Kraken Shell: cast, its block grows `active_pct_effectiveness` for `active_duration` - the
 * shield the cast lays, `modifier_tidehunter_kraken_shell_boost`; the shell's own modifier is the
 * passive block, on him all the time.
 */
declare class tidehunter_kraken_shell extends Ability implements IBuff, IShield {
	public readonly BuffModifierName = "modifier_tidehunter_kraken_shell_boost"
	public readonly ShieldModifierName = "modifier_tidehunter_kraken_shell_boost"
	public IsBuff(): this is IBuff
	public IsShield(): this is IShield
}
