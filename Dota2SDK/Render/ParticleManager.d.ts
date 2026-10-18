// AUTO-GENERATED - do not edit.
declare const enum PARTICLE_RENDER_NAME {
	NORMAL = "Normal",
	ROPE = "Rope"
}
declare enum PARTICLE_RENDER {
	NORMAL = 0,
	ROPE = 1
}
interface IDrawCircleOptions {
	Attachment?: ParticleAttachment
	RenderStyle?: PARTICLE_RENDER
	Position?: Entity | Vector3
	Color?: Color
	Fill?: boolean
}
interface IDrawLineOptions {
	Attachment?: ParticleAttachment
	Position?: Entity | Vector3
	Color?: Color
	Width?: number
	Alpha?: number
	Mode2D?: number
}
interface IDrawLineTargetOptions {
	Attachment?: ParticleAttachment
	Start?: Entity | Vector3
	End?: Entity | Vector3
	Color?: Color
	Alpha?: number
}
interface IDrawBoundingAreaOptions {
	RenderStyle?: PARTICLE_RENDER
	Color?: Color
	Width?: number
}
interface IDrawRectangleOptions {
	Attachment?: ParticleAttachment
	Start?: Vector3
	End?: Vector3
	Color?: Color
	Width?: number
	WihtinSource?: boolean
	WihtinArrow?: boolean
	ArrowSize?: number
	ArrowAlpha?: number
}
interface IDrawConeOptions extends IDrawRectangleOptions {
	WidthEnd?: number
}
interface IDrawArrowOptions {
	Attachment?: ParticleAttachment
	Start?: Vector3
	End?: Vector3
	Alpha?: number
	Color?: Color
	Width?: number
}
declare class ParticlesSDK implements IParticleOwner {
	public static readonly Instances: ParticlesSDK[]
	public readonly AllParticles: Map<any, Particle>
	constructor()
	public AddOrUpdate(key: any, path: string, attachment: ParticleAttachment, entity: Entity, ...points: ControlPointParam[]): Particle
	public DrawCircle(key: string | number, entity: Entity, range: number, options: IDrawCircleOptions): Particle
	/** @deprecated use key number or string */
	public DrawCircle(key: any, entity: Entity, range: number, options: IDrawCircleOptions): Particle
	public DrawSelectedRing(key: any, entity: Entity, range?: number, position?: Entity | Vector3, color?: Color): Particle
	public DrawLine(key: any, entity: Entity, endPosition: Entity | Vector3, options?: IDrawLineOptions): Particle
	public DrawRangeLine(key: any, entity: Entity, endPosition: Entity | Vector3): Particle
	public DrawLineToTarget(key: any, entity: Entity, target: Entity, color?: Color, options?: IDrawLineTargetOptions): Particle
	public DrawRectangle(key: string, entity: Entity, options?: IDrawRectangleOptions): Particle
	public DrawCone(key: string, entity: Entity, options?: IDrawConeOptions): Particle
	public DrawArrow2D(key: string, entity: Entity, options?: IDrawArrowOptions): Particle
	/**
	 *
	 * ControlPoints:
	 * 0: Start Position (|| entity pos)
	 * 1: End Position
	 * 2: Color
	 * 3: Width
	 * 4: Alpha
	 */
	public DrawBoundingArea(key: any, entity: Entity, startPos: Entity | Vector3, endPosition?: Entity | Vector3, options?: IDrawBoundingAreaOptions): Particle
	/**
	 * Stands a model where `position` is, through a particle built the way the Octarine model
	 * particles are: one `C_OP_RenderModels` model in a single particle emitted by a
	 * `C_OP_ContinuousEmitter` at CP3 × 1000, held at CP2, turned by CP5 and tinted by CP7 in its
	 * ghost variant. Creates the particle, or updates its control points while `path` and `entity`
	 * stay the same.
	 *
	 * Attach it to an entity that is always networked, such as `LocalPlayer`: a particle on a
	 * dormant entity is not drawn at all.
	 * @param position Where the model stands (CP2).
	 * @param scale The model's scale (CP3); 0 holds the emitter back and folds the model away.
	 * @param angles Which way the model faces (CP5), in degrees; a yaw of 0 faces east.
	 * @param color The tint of a ghost variant (CP7).
	 * @example
	 * particles.DrawModel(
	 * 	"courier",
	 * 	"particles/octarine/my-script/donkey_ghost.vpcf",
	 * 	LocalPlayer!,
	 * 	position,
	 * 	courier.ModelScale,
	 * 	angles,
	 * 	Color.Aqua
	 * )
	 */
	public DrawModel(key: any, path: string, entity: Entity, position: Vector3, scale: number, angles: QAngle, color: Color): Particle
	public SetConstrolPointByKey(key: any, id: number, point: ControlPoint): void
	public SetInFogVisibleByKey(key: any, state: boolean): void
	public SetConstrolPointsByKey(key: any, ...points: ControlPointParam[]): void
	/**
	 * Moves and turns a model stood by {@link DrawModel} (CP2 and CP5), leaving its scale and tint.
	 * Write it from `Draw`: positions read in `PostDataUpdate` run behind the drawn ones, and
	 * writing those every tick steps the model back.
	 */
	public SetModelPlacementByKey(key: any, position: Vector3, angles: QAngle): void
	/**
	 * Sets the scale (CP3; 0 folds the model away) and the ghost tint (CP7) of a model stood by
	 * {@link DrawModel}, leaving where it stands and faces.
	 */
	public SetModelLookByKey(key: any, scale: number, color: Color): void
	public RestartByKey(key: any): void
	public DestroyByKey(key: any, immediate?: boolean): void
	public DestroyAll(immediate?: boolean): void
	public CheckChangedRange(key: any, range: number): void
}
