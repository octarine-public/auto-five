import { Paths } from "./paths"

/** Glyphs of the menu page: the SDK set where it has one, our own outline glyphs otherwise. */
export const AutoFiveIcons = {
	/** An open hand raised for a high five: the page itself. */
	Page: `${Paths.Icons}/high-five.svg`,
	State: Menu.Icons.Power,
	/** A figure rising out of a ring: answering while teleporting away. */
	Teleport: `${Paths.Icons}/teleport.svg`,
	/** Two figures side by side: only allies are answered. */
	Allies: `${Paths.Icons}/allies.svg`,
	Delay: Menu.Icons.Timer
} as const
