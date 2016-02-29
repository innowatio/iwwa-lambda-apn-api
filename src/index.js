import connect from "lambda-connect";
import validateBody from "lcm-validate-body";

import schema from "./schema";
import log from "./services/logger";
import dispatch from "./services/dispatch";

export const handler = connect({log})
    .use(validateBody(schema))
    .use(request => {
        const {body: {userId, message}} = request;
        return dispatch("push to ios device", {userId, message});
    });
