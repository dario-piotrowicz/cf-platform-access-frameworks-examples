import type { ServerBuild} from "@remix-run/cloudflare";
import { logDevReady } from "@remix-run/cloudflare";
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as serverBuild from "@remix-run/dev/server-build";

const build = serverBuild as unknown as ServerBuild;

if (process.env.NODE_ENV === "development") {
  logDevReady(build);
}

export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext: (eventContext) => ({ eventContext }),
  mode: process.env.NODE_ENV,
});
