export default defineEventHandler(async (event) => {
    const { cf, cloudflare: { env, context, request } } = event.context;

    const myKv = env.MY_KV;
    const waitUntil = context.waitUntil;
    // Note: both cf objects are the same
    const contextRequestCf = cf;
    const loaderRequestCf = request.cf;
    const allItems = await myKv.list();

    const result = {
      allItems,
      loaderRequestCf,
      contextRequestCf,
      typeOfWaitUntil: typeof waitUntil
    };

    return JSON.stringify(result);
});
