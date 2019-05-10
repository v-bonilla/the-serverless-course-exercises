const http = require("superagent-promise")(require("superagent"), Promise);
const log = require("./src/lib/log")

const apiRoot = process.env.TEST_BASE_URL;
const method = "GET";

const url = `${apiRoot}/${functionPath}`;

log.debug(url);

try {
    const httpReq = http(method, url);
    const res = await httpReq;

    return {
        statusCode: res.status,
        body: res.body
    };
} catch (err) {
    if (err.status) {
        return {
            statusCode: err.status
        };
    }
    throw err;
}
