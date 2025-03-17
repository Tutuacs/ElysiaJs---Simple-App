import Elysia from "elysia";
import { listUsersHandler } from "./controllers/list/listUsers";
import { findByEmailUserHandler } from "./controllers/find/byEmail/findUser";
import { findByIdUserHandler } from "./controllers/find/byId/findUser";


export const UserHandler = new Elysia({ name: "UserHandler", prefix: "/user" })
    .use(listUsersHandler)
    .use(findByEmailUserHandler)
    .use(findByIdUserHandler)