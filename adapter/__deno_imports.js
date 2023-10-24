// This file is a shim for any Deno-specific imports!
// It will be replaced in the final Deno build.
//
// This allows us to prerender pages in Node.
import { path } from "https://deno.land/x/ramda/index.js";

export class Server {
	listenAndServe() {}
}

export function serveFile() {}
export function fromFileUrl() {}