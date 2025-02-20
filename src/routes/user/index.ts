import Elysia from "elysia";
import { listUsersHandler } from "./controllers/list/listUsers";
import { findByEmailUserHandler } from "./controllers/find/byEmail/findUser";


export const UserHandler = new Elysia({name: "UserHandler", prefix: "/user"})
    .use(listUsersHandler)
    .use(findByEmailUserHandler)