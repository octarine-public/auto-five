// AUTO-GENERATED - do not edit.
/**
 * Line of sight over the map grid the way the game draws its fog of war. The fog is the map's
 * grid (`GridNav.EdgeSize` cells): a viewer sees a cell when the centre of that cell lies within
 * its vision range of the centre of its own, and the straight line between the two centres
 * crosses no tree cell, no cell of a fog blocker the map places (`ent_fow_blocker_node`: the
 * walls of the Roshan pits, the fountains, fences and ramps) and no cell standing a terrain
 * level above the viewer's own (`LevelHeight`). A line through the corner of two cells crosses
 * neither, and the cell seen may itself be a tree, a blocker or a cliff - the first one in the
 * way is seen. Flying vision is blocked by none of them.
 *
 * Measured on the demo map against `FogOfWar` with all vision off, our hero standing at five
 * spots (open ground, a ramp, high ground, low ground, by the Roshan pit) among our towers:
 * within 1900 of the hero the rule saw 4265 of the 4399 cells the game showed and 315 it did
 * not, most of both at the edges of tree and wall shadows; the blockers took 420 wrong cells off
 * by the Roshan pit. An enemy hero walking in and out of a clear line flickered in our sight on
 * exactly the ticks the rule puts him in it. Trees of the team base layers and a few bamboo
 * trees of the river were seen past where other trees block; all trees are kept as blockers.
 * @example
 * const seen = VisionSDK.Terrain.Sees(ward.Position, hero.Position, ward.VisionRange, false)
 */
declare class TerrainSight {
	/**
	 * The height of one terrain level of the fog: a cell's level is the height of its highest
	 * corner in whole steps of it, so a ramp cell counts as the level its top edge reaches. The
	 * game keeps it in no data the client reads; fitted against `FogOfWar` on the demo map on
	 * 2026-10-16 (agreed with the project owner) - the terrain is built on these steps, and the
	 * level boundary at a whole step missed the fewest cells of any offset tried.
	 */
	public static readonly LevelHeight = 128
	/** The class of the map's fog blockers: each blocks the cell it stands in. */
	public static readonly BlockerClass = "ent_fow_blocker_node"
	/** Lets go of the map's levels and blockers; they are read again from the next map. */
	public Clear(): void
	/**
	 * Whether a viewer standing at `from` with vision `range` sees `to`; with `flying` vision
	 * nothing but the range limits it. False off the map grid.
	 */
	public Sees(from: Vector2 | Vector3, to: Vector2 | Vector3, range: number, flying: boolean): boolean
}
