// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * Opens the context menu of a navigation tab: the hotkeys and logic rules of the switch the tab
	 * wears in its top bar, the reset shared by every tab that owns config, and the rows the tab puts
	 * on itself through {@link Node.ContextItems}. A tab holding none of the three - a page whose state
	 * lives outside the entry tree and adds no rows of its own - opens nothing rather than a row that
	 * can never be pressed.
	 */
	function OpenTabContextMenu(event: Event, node: NodeEntry): void
	/**
	 * Drags the window from the element the press landed on. `onTap` is for a surface that answers a
	 * click of its own: the press only turns out to be one once the button comes back up without the
	 * window having travelled, which is why it is answered here rather than by a click handler - the
	 * shield that carries the drag takes the release, so the surface never sees one.
	 */
	function BeginWindowDrag(event: Event, state: WindowState, onTap?: () => void): void
	/**
	 * Declares a layout box of the menu window a backdrop: a press on its own bare area - a gap
	 * between the controls it holds, its padding - drags the window, while a press on anything
	 * inside it stays with that thing. Hand it straight to `ref`.
	 * @example
	 * <div ref={MenuSDK.MarkWindowBackdrop} style={{ display: "flex", padding: 8 }}>
	 * 	{cards}
	 * </div>
	 */
	function MarkWindowBackdrop(element: HTMLElement | null | undefined): void
	/** Starts a window drag when the press landed on a backdrop's own area. */
	function DragFromBackdrop(event: Event): void
	function TopCompressOf(state: {
		w: number
	}, tabs: NodeEntry[], current: number): number
	function TopNav(props: {
		nodes: NodeEntry[]
		activeTab: Nullable<NodeEntry>
		state: WindowState
		compress: number
	}): React.ReactElement
	function SetLayoutSwitcher(switcher: Nullable<() => void>): void
	function Rail(props: {
		nodes: NodeEntry[]
		activeTab: Nullable<NodeEntry>
		state: WindowState
		widths: WindowColumns
		rootRef: React.RefCallback<HTMLElement>
		contentRef: React.RefCallback<HTMLElement>
		dividerRef: React.RefCallback<HTMLElement>
		onToggle: (update: () => void) => void
	}): React.ReactElement
	function SubPanel(props: {
		tab: NodeEntry
		nodes: NodeEntry[]
		content: Nullable<NodeEntry>
		state: WindowState
		widths: WindowColumns
		rootRef: React.RefCallback<HTMLElement>
	}): React.ReactElement
	function TopBar(props: {
		tab: Nullable<NodeEntry>
		content: Nullable<NodeEntry>
		header?: ValueEntry
		state: WindowState
	}): React.ReactElement
	function Resizers(props: {
		state: WindowState
	}): React.ReactElement
	function WindowSuppressed(): boolean
	function CursorInWindow(state: WindowState): boolean
}
