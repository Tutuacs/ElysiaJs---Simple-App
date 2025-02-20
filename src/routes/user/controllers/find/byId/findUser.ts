import Elysia from "elysia";

export const UniqUserHandler = new Elysia({name: "UniqUserHandler"})
    .get("/id/:id", () => {}, {})