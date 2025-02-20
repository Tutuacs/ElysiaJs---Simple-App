import Elysia from "elysia";

export const listUsersHandler = new Elysia({name: "listUsersHandler"})
    .get("/", () => "AllUsers")