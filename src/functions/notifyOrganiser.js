const AWS = require("aws-sdk");
const log = require("../lib/log")

module.exports.handler = async (event, context) => {
    const orderPlaced = JSON.parse(event.Records[0].Sns.Message);
    log.info(`notified organiser [${orderPlaced.getTogetherId}, ${orderPlaced.orderId}, ${orderPlaced.userEmail}]`);
  
    return "all done";
  };
