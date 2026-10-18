// AUTO-GENERATED - do not edit.
/** Culling Blade: kills a unit at or under its threshold outright - what it is for. */
declare class axe_culling_blade extends Ability implements INuke {
	public IsNuke(): this is INuke
	public get IsFinisher(): boolean
	public GetBaseDamageForLevel(level: number): number
	public GetDamage(target: Unit): number
	public GetBaseCastRangeForLevel(level: number): number
}
