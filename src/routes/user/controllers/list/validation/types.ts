import { t } from "elysia";
import { UserEmail, UserID, UserRole } from "../../../types";

export const validationSchema = {
    response: {
        200: t.Object({
            users: t.Array(
                t.Object({
                    id: UserID,
                    email: UserEmail,
                    username: t.String(),
                    role: UserRole,
                    createdAt: t.String({ format: "date-time" }),
                }),
            ),
            currentPage: t.Number(),
            totalPages: t.Number(),
            totalUsers: t.Number(),
        }),
    }
} 