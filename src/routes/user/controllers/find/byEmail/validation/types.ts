import { t } from "elysia";
import { UserEmail, UserID, UserRole } from "../../../../types";

export const validationSchema = {
    params: t.Object({
        email: UserEmail,
    }, {
        description: "Expected an valid email",
    }),
    // headers: t.Object({
    //     Authorization: t.String(),
    // }, {
    //     description: "Should be the token 'Bearer {token}'",
    //     examples: ["Bearer {token}"],
    //     default: "Bearer {token}",
    // }),
    response: {
        200: t.Object({
            id: UserID,
            email: UserEmail,
            username: t.String(),
            role: UserRole,
            createdAt: t.String({ format: "date-time" }),
        }),
        404: t.Object({
            message: t.String(),
        }),
        // 500: t.Object({
        //     message: t.String(),
        //     error: t.String(),
        // }),
    },
}