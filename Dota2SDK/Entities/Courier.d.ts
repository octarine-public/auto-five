// AUTO-GENERATED - do not edit.
declare class Courier extends Unit {
	public readonly Index: number
	public readonly IsFlying: boolean
	public readonly RespawnTime: number
	public readonly State: CourierState
	public readonly StateHero_: number
	public get StateHero(): Nullable<Hero>
	public get ShouldUnifyOrders(): boolean
	protected get UnitHealthBarSize(): Vector2
	protected get UnitHealthBarPositionCorrection(): Vector2
}
