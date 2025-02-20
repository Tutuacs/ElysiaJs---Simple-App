import swagger from "@elysiajs/swagger";
import { Elysia, t } from "elysia";
import { UserHandler } from "./routes/user";

const app = new Elysia()
  .use(swagger())
  .get("/", () => "AllPosts")
  .use(UserHandler)

.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
