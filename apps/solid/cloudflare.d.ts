declare global {
    interface Env {
      MY_KV: KVNamespace;
    }
}

declare global {
    export interface Request {
      cf: IncomingRequestCfProperties;
    }
}

export {};
