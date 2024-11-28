import { auth } from "@/utils/auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/auth/*", (c) => auth.handler(c.req.raw));
app.post("/auth/*", (c) => auth.handler(c.req.raw));

export const GET = handle(app);
export const POST = handle(app);
