import {
	Menu,
	NotificationsSDK,
	ResetSettingsUpdated,
	Sleeper
} from "github.com/octarine-public/wrapper/index"

export class MenuManager {
	public readonly State: Menu.Toggle
	public readonly Delay: Menu.Slider
	public readonly UseWhenTP: Menu.Toggle
	public readonly OnlyAllyState: Menu.Toggle
	private readonly baseNode = Menu.AddEntry("Utility")

	private readonly nodeIcon =
		"panorama/images/spellicons/consumables/plus_high_five_png.vtex_c"

	constructor(private readonly sleeper: Sleeper) {
		const tree = this.baseNode.AddNode("Auto five", this.nodeIcon, "Use auto five", 0)
		this.State = tree.AddToggle("State", true)
		this.UseWhenTP = tree.AddToggle(
			"Use when TP",
			true,
			"Use during your teleportation\nof an enemy is nearby"
		)
		this.OnlyAllyState = tree.AddToggle(
			"Only allies",
			false,
			"Only use if it's an ally"
		)
		this.Delay = tree.AddSlider("Delay", 2, 0, 9, 0, "Delay before use (sec)")
		tree.AddButton("Reset settings", "Reset settings to default").OnValue(() =>
			this.ResetSettings()
		)
	}

	protected ResetSettings() {
		if (!this.sleeper.Sleeping("ResetSettings")) {
			this.State.value = this.State.defaultValue
			this.Delay.value = this.Delay.defaultValue
			this.UseWhenTP.value = this.UseWhenTP.defaultValue
			this.OnlyAllyState.value = this.OnlyAllyState.defaultValue
			NotificationsSDK.Push(new ResetSettingsUpdated())
			this.sleeper.Sleep(2 * 1000, "ResetSettings")
		}
	}
}
