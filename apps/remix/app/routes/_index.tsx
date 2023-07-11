import type { DataFunctionArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export async function loader({ request, context }: DataFunctionArgs) {
  const myKv = context.eventContext.env.MY_KV;
  const waitUntil = context.eventContext.waitUntil;
  // Note: both requests are the same (and the cf is also the same)
  const loaderRequestCf = request.cf;
  const contextRequestCf = context.eventContext.request.cf;
  const allItems = await myKv.list();

  const result = {
    allItems,
    loaderRequestCf,
    contextRequestCf,
    typeOfWaitUntil: typeof waitUntil
  };

  return result;
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  console.log({data});

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <p>
        {JSON.stringify(data)}
      </p>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
