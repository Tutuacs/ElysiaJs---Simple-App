import Elysia from "elysia";
import { validationSchema } from "./validation/types";

export const findByIdUserHandler = new Elysia({ name: "findByIdUserHandler" })
    .get("/id/:id", ({set, params: {id}}) => {

        if (id === "65507ffc-5396-479f-a252-7248857ac153") {
            set.status = 404;
            return {
                message: "User not found"
            }
        }

        return {
            id: id,
            email: "arthur@gmail.com",
            username: "username",
            role: 2,
            createdAt: new Date().toISOString(),
        }

    }, validationSchema)