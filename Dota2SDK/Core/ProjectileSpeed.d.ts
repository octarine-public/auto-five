// AUTO-GENERATED - do not edit.
/**
 * A circle that changes how fast the projectiles crossing it fly: Faceless Void's Distortion
 * Field around him and around every ally carrying it, his Time Zone around its thinker. The
 * field follows the unit the modifier sits on, and its radius and share come from the ability,
 * so a level, an Aghanim's or an AoE bonus is read live. The circle lies on the ground and stands
 * over every height, as the game's radii do: a projectile flies at its attachment's height, well
 * above the field's centre, and is inside the field wherever it is above the circle.
 */
declare class ProjectileSpeedField {
	/** The modifier holding the field; the field is centred on its parent. */
	public readonly Modifier: Modifier
	/** The ability's special value naming the share taken off an enemy projectile. */
	public readonly Share: string
	/**
	 * What the field does to a projectile of its own team: nothing at `0`, hurries it by the
	 * same share at `-1`.
	 */
	public readonly OwnTeam: number
	/** Whether the field only touches attack projectiles. */
	public readonly AttacksOnly: boolean
	/**
	 * Which aura the field came from, as a bit the fields' store gives each modifier class. Copies
	 * of one aura cover the map together but count once, the way the game never stacks an aura
	 * with itself; two different auras add up.
	 */
	public Kind: number
	constructor(
	/** The modifier holding the field; the field is centred on its parent. */
	Modifier: Modifier, 
	/** The ability's special value naming the share taken off an enemy projectile. */
	Share: string, 
	/**
	 * What the field does to a projectile of its own team: nothing at `0`, hurries it by the
	 * same share at `-1`.
	 */
	OwnTeam: number, 
	/** Whether the field only touches attack projectiles. */
	AttacksOnly: boolean)
	/** Where the field stands: the unit its modifier sits on; invalid once it no longer holds. */
	public get Center(): Vector3
	/** How far the field reaches, read off its ability. */
	public get Radius(): number
	/**
	 * The share of its speed a projectile of `source` loses anywhere inside the field: negative
	 * where the field hurries it, zero where the field no longer holds or does not touch this
	 * kind of projectile.
	 */
	public ShareInside(source: Unit, isAttack: boolean): number
	/** The share of its speed a projectile of `source` loses at `position`, whatever its height. */
	public ShareAt(source: Unit, position: Vector3, isAttack: boolean): number
}
