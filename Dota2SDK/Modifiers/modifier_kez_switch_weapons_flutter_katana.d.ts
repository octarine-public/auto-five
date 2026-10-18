// AUTO-GENERATED - do not edit.
/**
 * The katana swap's bonus is base attack damage the server gives through the katana stance
 * (server.dll, kez.md: BASEATTACK_BONUSDAMAGE, `katana_swap_bonus_damage` while this is on) - the
 * hero's networked base damage carries it already (182 to 205 at level 30), so this declares no
 * damage of its own: a percentage on top counted it twice (a 184 echo strike priced 206)
 */
declare class modifier_kez_switch_weapons_flutter_katana extends Modifier implements IBuff {
	public readonly IsHidden: boolean
	public readonly BuffModifierName: string
	public IsBuff(): this is IBuff
}
