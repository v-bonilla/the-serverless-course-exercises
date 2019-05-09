const handler = require(`../src/functions/helloWorld`);
const invoke = require(`./steps/when`);

describe(`When we invoke the GET /helloWorld endpoint`, () => {
    test(`Should return the right greeting`, async () => {
        const response = await invoke.we_invoke_helloWorld("Manolito")
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe("Hello Manolito");
    });
});
