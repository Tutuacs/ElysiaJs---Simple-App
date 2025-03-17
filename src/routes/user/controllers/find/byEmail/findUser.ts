import Elysia from "elysia";
import { validationSchema } from "./validation/types";

export const findByEmailUserHandler = new Elysia({ name: "ByEmailUserHandler" })
    .get("/email/:email", ({set, params: { email } }) => {

        if (email === "email@email.com") {
            set.status = 404;
            return {
                message: "User not found"
            }
        };

        return {
            id: "65507ffc-5396-479f-a252-7248857ac153",
            email: email,
            username: "username",
            role: 2,
            createdAt: new Date().toISOString(),
        };

    }, validationSchema)
