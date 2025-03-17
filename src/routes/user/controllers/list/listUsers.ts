import Elysia from "elysia";
import { validationSchema } from "./validation/types";

export const listUsersHandler = new Elysia({ name: "listUsersHandler" })
    .get("/", () => {
        return {
            users: [
                {
                    id: "65507ffc-5396-479f-a252-7248857ac153",
                    email: "user1@gmail.com",
                    username: "username",
                    role: 2 as const, // "as const" is used to set this like a ENUM
                    createdAt: new Date().toISOString(),
                },
                {
                    id: "65507ffc-5396-479f-a252-7248857ac154",
                    email: "user2@gmail.com",
                    username: "username",
                    role: 1 as const, // "as const" is used to set this like a ENUM
                    createdAt: new Date().toISOString(),
                },
            ],
            currentPage: 1,
            totalPages: 1,
            totalUsers: 2,
        }
    }, validationSchema)