import { t } from "elysia";
import { UserEmail, UserID, UserRole } from "../../../../types";

const validationSchema = {
    params: t.Object({
        email: t.String().email().required()
    }),
    response: t.Object({
        200: t.Object({
            id: UserID,
            email: UserEmail,
            username: t.String(),
            role: t.Number(),
            createdAt: t.Date(),
        }),
        404: t.Object({
            message: t.String(),
        }),
        500: t.Object({
            message: t.String(),
            error: t.String(),
        }),
    })
}
