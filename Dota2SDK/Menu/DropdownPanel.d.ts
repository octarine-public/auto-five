// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/** The picture an option carries, and the gap between it and the name it belongs to. */
	const OptionIconDp = 20
	const OptionIconGapDp = 8
	/**
	 * Width of the widest value `entry` offers, in dp, as text in `role` sets it: the list in the
	 * panel is set like the menu, the value in the trigger like the settings row it stands in.
	 */
	function WidestValueDp(entry: PanelEntry, role?: EFontRole): number
	type PanelEntry = DropdownEntry | MultiSelectEntry
	/**
	 * The pickers riding the options that are picked right now, in the order the list holds them.
	 * They belong on the control's own row: an option carries its colour, and the row shows the
	 * colours of what it is set to without anyone having to open the list.
	 */
	function SelectedColors(entry: PanelEntry): ColorEntry[]
	function OpenDropdown(entry: PanelEntry, anchor: ScreenRect): void
	/** How {@link OpenOptionPicker} behaves beyond picking. */
	interface IOptionPickerOptions {
		/**
		 * A wheel turn over the open list picks the next or the previous option and keeps the list
		 * open, handing each step to `pick` as a click would.
		 */
		readonly wheel?: boolean
		/**
		 * The z-index the list stands at, for one opened from a surface drawn above the menu's own
		 * dropdowns; the scrim that closes it stands just under it.
		 */
		readonly zIndex?: number
		/** Told once the list goes, picked from, clicked away or replaced by another list. */
		readonly onClose?: () => void
		/**
		 * An outline glyph before each option, parallel to the values, tinted with the text the way
		 * the menu's row icons are; an empty entry carries none.
		 */
		readonly icons?: readonly string[]
	}
	/**
	 * Opens the option list as a standalone picker: the same panel a dropdown row
	 * opens, anchored to any rect, handing the picked index to `pick` and closing
	 * itself. The hotkey editor uses it to choose the option a hotkey selects.
	 *
	 * @example
	 * OpenOptionPicker(["Flat", "Glow"], style, ElementRect(chip), index => setStyle(index), {
	 *     wheel: true
	 * })
	 */
	function OpenOptionPicker(values: readonly string[], selected: number, anchor: ScreenRect, pick: (index: number) => void, options?: IOptionPickerOptions): void
	/**
	 * Opens the option list as a standalone multiselect picker. The selection is
	 * read on every repaint, and each pick returns a new array in option order.
	 */
	function OpenMultiOptionPicker(values: readonly string[], selected: () => readonly string[], anchor: ScreenRect, pick: (values: string[]) => void): void
	function CloseDropdown(): void
	function IsDropdownOpen(entry?: PanelEntry): boolean
}
