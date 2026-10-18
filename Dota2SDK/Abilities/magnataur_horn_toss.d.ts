// AUTO-GENERATED - do not edit.
/**
 * Horn Toss, of Aghanim's Scepter: in the server's handler of the cast, every enemy within
 * `radius` of the spot `pull_offset` ahead of Magnus and within half `pull_angle` of his facing is
 * thrown over him for `air_duration`, all of them set down at one spot, `destination_offset`
 * behind him (`Tosses`, `LandingFrom`), then stunned.
 */
declare class magnataur_horn_toss extends Ability implements INuke {
	protected AppliedFrom(values: ISpecialValues, level: number): number
	public IsNuke(): this is INuke
	public GetBaseAOERadiusForLevel(level: number): number
	public GetBaseDamageForLevel(level: number): number
	public get AppliesUnitState(): bigint
	/** How far ahead of Magnus the spot its search is centred on lies. */
	public get PullOffset(): number
	/** How far behind Magnus what it throws is set down. */
	public get DestinationOffset(): number
	/** The width of what it takes about Magnus's facing, in degrees: half of it either way. */
	public get PullAngle(): number
	/** How long what it throws is in the air. */
	public get AirDuration(): number
	/**
	 * Whether a toss by Magnus at `from` facing `forward` takes a unit at `position`: within
	 * `AOERadius` of the spot `PullOffset` ahead of him, its way from him within half `PullAngle`
	 * of his facing.
	 * @example
	 * const tossed = toss.Tosses(hero.Position, hero.Forward, enemy.Position)
	 */
	public Tosses(from: Vector3, forward: Vector3, position: Vector3): boolean
	/**
	 * Where a toss by Magnus at `from` facing `forward` sets down what it takes, into `out`:
	 * `DestinationOffset` behind him.
	 * @example
	 * const landing = toss.LandingFrom(hero.Position, hero.Forward)
	 */
	public LandingFrom(from: Vector3, forward: Vector3, out?: Vector3): Vector3
	/**
	 * The toss: from where `target` is as it lands at `landsAt`, over Magnus at `from` - as he
	 * faces now: the cast turns him nowhere - to the spot behind him, for `AirDuration`; none for a
	 * unit out of its reach.
	 */
	public MotionOn(target: Unit, from: Vector3, _toward: Vector3, landsAt: number): Nullable<Motion>
}
