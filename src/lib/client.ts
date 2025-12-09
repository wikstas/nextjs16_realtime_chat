import { treaty } from "@elysiajs/eden"
import type { App } from "../app/api/[[...slugs]]/route"

export const client = treaty<App>("https://nextjs16-realtime-chat.vercel.app").api
