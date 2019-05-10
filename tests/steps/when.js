const log = require("../../src/lib/log")
const http = require("superagent-promise")(require("superagent"), Promise);

module.exports.we_invoke_helloWorld = (name) => {
    const event = { pathParameters: { name: name } };

    const mode = process.env.TEST_MODE;

    return mode === "http"
        ? viaHttp(`helloWorld/${name}`, "GET")
        : viaHandler("helloWorld", event);
}

module.exports.we_invoke_get_getTogethers = () => {
    const mode = process.env.TEST_MODE;

    return mode === "http"
        ? viaHttp(`gettogethers`, "GET")
        : viaHandler("getGetTogethers");
}

async function viaHandler(name, event) {
    const handler = require(`../../src/functions/${name}`);
    log.debug(name)
    const response = await handler.handler(event);
    log.debug(response)
    response.body = JSON.parse(response.body);
    log.debug(response)
    return response
}

async function viaHttp(functionPath) {
    const apiRoot = process.env.TEST_BASE_URL;
    const method = "GET";

    const url = `${apiRoot}/${functionPath}`;

    log.info(url);

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
}
