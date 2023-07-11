/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

declare global {
      export interface Request {
        cf: IncomingRequestCfProperties;
      }
  }

interface Env {
    MY_KV: KVNamespace;
}

declare module "@remix-run/server-runtime" {
    export interface AppLoadContext {
        eventContext: EventContext<Env, any, Record<string, unknown>>;
    }
}

export {}