import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ request, platform }) => {
    if(!platform) return { result: '' };

    const myKv = platform.env.MY_KV;
    const waitUntil = platform.context.waitUntil;
    const requestCf = request.cf;
    const allItems = await myKv.list();

    const result = {
      allItems,
      requestCf,
      typeOfWaitUntil: typeof waitUntil
    };

    return {
     result: JSON.stringify(result)
    };
};
