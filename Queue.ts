import { HeroX, HighFive, TickSleeperX } from "github.com/octarine-private/immortal-core/index"

export class Queue {
	public Sleeper = new TickSleeperX()

	constructor(public delay: number, public hero: HeroX, protected readonly ability: HighFive) {
		this.Sleeper.Sleep(delay)
	}

	public UseAbility() {
		if (!this.hero.HasBuffByName("modifier_plus_high_five_requested")) return
		const caster = this.ability.Owner
		if (caster === undefined || caster.IsInvulnerable) return
		if (
			!caster.IsControllable ||
			!this.ability.CanBeCasted() ||
			caster.Distance(this.hero) > this.ability.Radius
		)
			return
		this.ability.UseAbility()
	}
}
