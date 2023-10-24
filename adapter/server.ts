// Normal Imports
import type { SSRManifest } from 'astro';
import { App } from 'astro/app';
import type { Options } from './types';

export function createExports(manifest: SSRManifest, options: Options) {
	const app = new App(manifest);

	return {
		async handle({streamOutput, feature}) {
			for (const route of manifest.routes) {
				const trimmedRoute = route.routeData.route.replace(/^\//, '') || 'index'
				if (trimmedRoute === feature) {
					const content = await app.render(new Request('https://localhost:8085/'), route.routeData, {yextDocument: streamOutput})
						.then(r => r.text());

					// Fallback to route
					let path = streamOutput?.slug || (trimmedRoute || 'index.html');

					return {
						content,
						path: path || 'finalFallback.html',
					}
				}
			}

			throw new Error(`Unable to match feature: ${feature}`)
		},
	};
}