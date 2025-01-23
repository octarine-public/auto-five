import { Menu } from "github.com/octarine-public/wrapper/index"

export class MenuManager {
	public readonly State: Menu.Toggle
	public readonly Delay: Menu.Slider
	public readonly UseWhenTP: Menu.Toggle
	public readonly OnlyAllyState: Menu.Toggle
	private readonly baseNode = Menu.AddEntry("Utility")

	private readonly nodeIcon =
		"panorama/images/spellicons/consumables/plus_high_five_png.vtex_c"

	constructor() {
		const tree = this.baseNode.AddNode(
			"Auto five",
			this.nodeIcon,
			"Use auto five",
			-1
		)
		this.State = tree.AddToggle("State", false)
		this.UseWhenTP = tree.AddToggle(
			"Use when TP",
			false,
			"Use during your teleportation\nof an enemy is nearby"
		)
		this.OnlyAllyState = tree.AddToggle(
			"Only allies",
			false,
			"Only use if it's an ally"
		)
		this.Delay = tree.AddSlider("Delay", 2, 0, 9, 0, "Delay before use (sec)")
	}
}
