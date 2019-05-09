exports.handler = async (event) => {

    // Lesson 1
    // const {name} = event.queryStringParameters;
    // Lesson 2
    const {name} = event.pathParameters;

    // const body = JSON.parse(event.body);

    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello ${name}`),
    };
    return response;
};
