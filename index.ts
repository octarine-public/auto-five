import { EventsX, GameX, HeroX, HighFive } from "github.com/octarine-private/immortal-core/index"
import { ArrayExtensions, EventsSDK, Menu as MenuSDK } from "github.com/octarine-public/wrapper/index"
import Queue from "./Queue"
import "./Translate"

const Menu = MenuSDK.AddEntry("Utility")
const Tree = Menu.AddNode("Auto five", "panorama/images/spellicons/consumables/plus_high_five_png.vtex_c", "Use auto five", 0)
const State = Tree.AddToggle("State", true)
const OnlyAlly = Tree.AddToggle("OnlyAllyAutoFive", false)
const Delay = Tree.AddSlider("DelayAutoFive", 2, 0, 9, 0, "Delay before use (sec)")

const Heroes: HeroX[] = []
const UseQueue: Queue[] = []
const Abilities: HighFive[] = []

EventsSDK.on("Tick", () => {

	if (!State.value || !GameX.IsInGame)
		return

	for (const queue of UseQueue) {
		if (queue.Sleeper.RemainingSleepTime > 0.01)
			continue
		queue.UseAbility()
		queue.Sleeper.Reset()
		ArrayExtensions.arrayRemove(UseQueue, queue)
	}

	for (const hero of Heroes) {
		if (hero.IsEnemy() && OnlyAlly.value)
			continue
		if (!hero.IsAlive || !hero.IsVisible)
			continue
		if (hero.IsMyHero || !hero.HasBuffByName("modifier_plus_high_five_requested"))
			continue
		for (const abil of Abilities) {
			const caster = abil.Owner
			if (caster === undefined || caster.IsInvulnerable || caster.IsEnemy() || caster.IsInvisible || !caster.IsVisibleForEnemies)
				continue
			if (!caster.IsControllable || !abil.CanBeCasted() || caster.Distance(hero) > abil.Radius)
				continue
			Delay.value === 0
				? abil.UseAbility()
				: UseQueue.push(new Queue(Delay.value, hero, abil))
		}
	}
})

EventsX.on("EntityCreated", ent => {
	if (ent instanceof HeroX)
		Heroes.push(ent)
	if (ent instanceof HighFive)
		Abilities.push(ent)
})

EventsX.on("EntityDestroyed", ent => {
	if (ent instanceof HeroX)
		ArrayExtensions.arrayRemove(Heroes, ent)
	if (ent instanceof HighFive)
		ArrayExtensions.arrayRemove(Abilities, ent)
})
