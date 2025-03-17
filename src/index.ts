import { swagger } from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";
import { UserHandler } from "./routes/user";

const app = new Elysia()
  .use(cors())
  .use(swagger())
  .get("/default", () => "AllPosts")
  .use(UserHandler)

.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
