/** Root the loader mounts this package at: a spelled-out repository path does not resolve. */
const files = `${__OCT_PACKAGE_ROOT__}/scripts_files`

export const Paths = {
	Files: files,
	Icons: `${files}/auto-five/icons`
} as const
