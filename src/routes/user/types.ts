import { t } from "elysia";

export const UserID = t.String({format: "uuid"});
export const UserEmail = t.String({format: "email", description: "Email of the user"});
export const UserRole = t.Enum({ admin: 1, user: 2 });