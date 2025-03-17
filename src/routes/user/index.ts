import Elysia, { t } from "elysia";
import { listUsersHandler } from "./controllers/list/listUsers";
import { findByEmailUserHandler } from "./controllers/find/byEmail/findUser";
import { findByIdUserHandler } from "./controllers/find/byId/findUser";


export const UserHandler = new Elysia({ name: "UserHandler", prefix: "/user",  tags: ["User"] })
    // .use(listUsersHandler)
    // .use(findByEmailUserHandler)
    // .use(findByIdUserHandler)
    // * UseHandlers out guard only on routes without required auth
    .guard({
        cookie: t.Cookie({
            auth: t.String(),
        }, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        }),
        detail: {
            parameters: [{
                in: 'cookie',
                name: 'auth',
                required: true,
                schema: {
                    description: "JWT token saved on cookie httpOnly on client side login",
                    type: 'string' as const,
                }
            }],
        },
    }, (UserHandler) => 
        UserHandler
        .use(listUsersHandler)
        .use(findByEmailUserHandler)
        .use(findByIdUserHandler)
    )