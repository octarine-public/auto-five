import { HeroX, HighFive, TickSleeperX } from "immortal-core/Imports"

export default class Queue {

	public Sleeper = new TickSleeperX()

	constructor(
		public Delay: number,
		public hero: HeroX,
		protected readonly ability: HighFive,
	) {
		this.Sleeper.Sleep(Delay)
	}

	public UseAbility() {
		if (!this.hero.HasBuffByName("modifier_plus_high_five_requested"))
			return
		const caster = this.ability.Owner
		if (caster === undefined || caster.IsInvulnerable)
			return
		if (!caster.IsControllable || !this.ability.CanBeCasted() || caster.Distance2D(this.hero) > this.ability.Radius)
			return
		this.ability.UseAbility()
	}
}