export interface Options {
	features: Record<string, {
		stream?: {
			fields?: string[],
			localization?: {
				locales: string[],
			},
			filter: {
				entityIds?: string[]
				entityTypes?: string[]
				savedFilterIds?: string[]
			}
		},
		path: string;
	}>
}

export interface BuildConfig {
	server: URL;
	serverEntry: string;
	assets: string;
}