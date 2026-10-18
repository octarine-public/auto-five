// AUTO-GENERATED - do not edit.
declare class modifier_courier_passive_bonus extends AttackCountModifier {
	protected readonly DeclaredFunction: Map<EModifierfunction, ModifierHandlerValue>
	protected get RangedHeroHit(): number
	protected get MeleeHeroHit(): number
	protected IsMeleeAttacker(attacker: Unit): boolean
	protected GetIgnoreMoveSpeedLimit(): [number, boolean]
	protected GetMoveSpeedBonusConstant(): [number, boolean]
}
