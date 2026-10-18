// AUTO-GENERATED - do not edit.
/**
 * A modifier that makes its parent count attacks rather than damage, as the game's own do for
 * Nether Ward, Tombstone, couriers and the like: neither spells nor the damage of an attack hurt
 * the parent, each attack takes a fixed number of HP off it instead ({@link GetAttackHitDamage}),
 * and its health bar is split into segments ({@link Unit.HealthBarPips}).
 *
 * A hero here is a hero that is not an illusion; every other attacker - creeps, towers,
 * illusions - hits as {@link OtherHit}.
 */
declare class AttackCountModifier extends Modifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, ModifierHandlerValue>
	/**
	 * HP an attack of `attacker`'s takes off the parent.
	 * @example
	 * const hits = Math.ceil(unit.HP / courierBuff.GetAttackHitDamage(hero))
	 */
	public GetAttackHitDamage(attacker: Unit): number
	/** Segments of the parent's health bar: one per {@link SegmentHealth} of its max HP */
	public get HealthBarPips(): number
	/** HP an attack of a ranged hero's takes */
	protected get RangedHeroHit(): number
	/** HP an attack of a melee hero's takes */
	protected get MeleeHeroHit(): number
	/** HP an attack of anything but a hero takes */
	protected get OtherHit(): number
	/** HP one segment of the health bar stands for */
	protected get SegmentHealth(): number
	/** Whether `attacker` hits as a hero */
	protected HitsAsHero(attacker: Unit): boolean
	/** Whether `attacker` hits as a melee hero */
	protected IsMeleeAttacker(attacker: Unit): boolean
	/** The properties every attack counter declares, for a subclass declaring more */
	protected AttackCountFunctions(): [EModifierfunction, ModifierHandlerValue][]
	protected UnitPropertyChanged(changed?: boolean): boolean
}
