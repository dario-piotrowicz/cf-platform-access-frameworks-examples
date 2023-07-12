import { Show } from "solid-js";
import { Title, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import Counter from "~/components/Counter";

export function routeData() {
  return createServerData$(async (_, { request, env }) => {

    const myKv = env.MY_KV;
    const requestCf = request.cf;
    const allItems = await myKv.list();
    
    const result = {
      allItems,
      requestCf,
      // NOTE: there currently isn't a way to access ctx
      typeOfWaitUntil: undefined
    };

    return {
     result: JSON.stringify(result)
    };
  });
}

export default function Home() {
  const data = useRouteData<typeof routeData>();
  const result = () => data()?.result;

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Show when={result()}>
      <p>
        {result()}
      </p>
      </Show>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
