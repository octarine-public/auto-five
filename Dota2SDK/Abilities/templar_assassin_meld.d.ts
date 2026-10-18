// AUTO-GENERATED - do not edit.
declare class templar_assassin_meld extends Ability implements INuke, IBuff {
	public readonly BuffModifierName = "modifier_templar_assassin_meld"
	public IsBuff(): this is IBuff
	public get IsInvisibility(): boolean
	public IsNuke(): this is INuke
	public GetBaseDamageForLevel(level: number): number
	public GetBaseSpeedForLevel(_level: number): number
	public GetRawDamage(target: Unit): number
	public GetDamage(target: Unit): number
	protected MeetsSpellBlock(): boolean
	public get CastRange(): number
}
