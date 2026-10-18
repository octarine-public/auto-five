// AUTO-GENERATED - do not edit.
declare class CGameState {
	public static Current: CGameState
	public readonly DefaultTickInterval: number
	public TickInterval: number
	public CurrentServerTick: number
	public CurrentGameTick: number
	public CurrentFrame: number
	public IsDedicatedServer: boolean
	public MapName: string
	public AddonName: string
	public IsInDraw: boolean
	public IsShopOpen: boolean
	/**
	 * True while the in-game menu covers the HUD. The engine reports no such flag, so each game
	 * fills it in from its own UI.
	 */
	public IsEscapeMenuOpen: boolean
	public RawGameTime: number
	public RawServerTime: number
	public LocalTeam: number
	constructor(defaultTickInterval?: number)
	/**
	 * Round-trip time to the server. A method rather than a property because a game whose net
	 * channel reports the two directions apart passes which one it means.
	 */
	public GetLatency(): number
	public GetAvgLatency(): number
	public get IOLag(): number
	public get InputLag(): number
	public get IsConnected(): boolean
	public ExecuteCommand(command: string): void
	/**
	 * Runs `command` the way the client runs its own input, through the engine's client command
	 * path, so `+`/`-` input commands press and release like the bound key; `false` when the
	 * engine refused it.
	 *
	 * @example
	 * GameState.ExecuteClientCommand("+in_mantle; -in_mantle")
	 */
	public ExecuteClientCommand(command: string): boolean
	public GetIOLag(latency: number): number
	public GetInputLag(latency: number): number
}

/**
 * The shared game state with what only Dota reports: which panorama screen is up, whether the game
 * is eating input, and a net channel that measures the two directions apart.
 */
declare class CDotaGameState extends CGameState {
	/** @deprecated use GameState.TickInterval */
	public LatestTickDelta: number
	public IsInputCaptured: boolean
	public UIState: DOTAGameUIState
	public LocalTeam: Team
	constructor()
	/** @deprecated */
	public get Ping(): number
	/** @deprecated */
	public get AvgPing(): number
	public get IOLag(): number
	public get InputLag(): number
	/**
	 * Seconds between an order leaving the client and its result showing in the client's own state,
	 * for a unit that does not have to turn first: the order reaching the server, the server acting
	 * on it the tick after, and the snapshot of that tick coming back.
	 */
	public get AnswerLag(): number
	public get IsDemo(): boolean
	/**
	 * Whether a screen overlay would land on the game world right now: connected, with the match
	 * UI up rather than the dashboard or another full-screen panorama page.
	 */
	public get CanDrawOverlays(): boolean
	public GetLatency(flow?: Flow): number
	public GetAvgLatency(flow?: Flow): number
	/**
	 * Seconds between an order leaving the client and the server acting on it, on the client's
	 * clock of the game: the latency rounded up to whole ticks (`IOLag`) and the tick the server
	 * takes; one tick on a listen server.
	 */
	public GetInputLag(latency: number): number
}
declare const GameState: CDotaGameState
