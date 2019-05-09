const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = `${process.env.TABLE_NAME}`;

module.exports.handler = async () => {
    const count = 8;
    console.log(tableName)

    const req = {
        TableName: tableName,
        Limit: count
    };

    const resp = await dynamodb.scan(req).promise();

    const res = {
        statusCode: 200,
        body: JSON.stringify(resp.Items)
    };

    return res;
};
