// Normal Imports
import type { SSRManifest } from 'astro';
import { App } from 'astro/app';
import type { Options } from './types';

export function createExports(manifest: SSRManifest, options: Options) {
	const app = new App(manifest);

	return {
		async handle({streamOutput, feature}) {

			// for (const route of manifest.routes) {
				// console.log(route.routeData)
			// }
			for (const route of manifest.routes) {
				if (route.routeData.type !== 'page') continue;
				const trimmedRoute = route.routeData.route.replace(/^\//, '')
				if (trimmedRoute || 'index' === feature) {
					const content = await app.render(new Request('https://localhost:8085/'), route.routeData, {yextDocument: streamOutput})
						.then(r => r.text());

					// Fallback to route
					let path = streamOutput?.slug || (trimmedRoute || 'index.html');

					return {
						content,
						path: path,
					}
				}
			}

			throw new Error(`Unable to match feature: ${feature}`)
		},
	};
}