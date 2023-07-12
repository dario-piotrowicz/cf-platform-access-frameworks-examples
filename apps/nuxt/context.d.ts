declare module "h3" {
    interface H3EventContext { 
        cf: IncomingRequestCfProperties,
        cloudflare: {
          request: Request,
          env: {
            MY_KV: KVNamespace;
          },
          context: {
            waitUntil: (promise: Promise<any>) => void;
          }
      },
    }
}

export {};
