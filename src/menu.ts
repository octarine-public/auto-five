import { AutoFiveIcons } from "./icons"

export class MenuManager {
	public readonly State: Menu.Toggle
	public readonly Delay: Menu.Slider
	public readonly UseWhenTP: Menu.Toggle
	public readonly OnlyAllyState: Menu.Toggle

	private readonly tree: Menu.Node

	constructor() {
		this.tree = Menu.AddEntry("Utility").AddNode(
			"Auto five",
			AutoFiveIcons.Page,
			"Answers a high five\nwhen a hero nearby offers one"
		)
		this.tree.SortNodes = false

		// the script's own switch rides the header of the page and gates it
		this.State = this.tree.AddToggle("State", false)
		this.State.IconPath = AutoFiveIcons.State
		this.tree.HeaderControl = this.State
		this.tree.Gate = this.State

		this.UseWhenTP = this.tree.AddToggle(
			"Use when TP",
			false,
			"Use during your teleportation\nif an enemy is nearby"
		)
		this.UseWhenTP.IconPath = AutoFiveIcons.Teleport

		this.OnlyAllyState = this.tree.AddToggle(
			"Only allies",
			false,
			"Only answer a high five\noffered by an ally"
		)
		this.OnlyAllyState.IconPath = AutoFiveIcons.Allies

		this.Delay = this.tree.AddSlider("Delay", 2, 0, 9, 0, "Delay before use (sec)")
		this.Delay.IconPath = AutoFiveIcons.Delay
	}
}
