
// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const myKv = process.env.MY_KV;
  const allItems = await myKv.list();
  console.log(allItems);
  // NOTE: we cannot currently access ctx and cf
  return new Response(JSON.stringify({ name: 'John Doe' }))
}
