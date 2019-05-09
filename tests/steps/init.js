module.exports.init = () => {
    process.env.AWS_REGION = "eu-west-1";
    process.env.TABLE_NAME = `${process.env.STAGE}-gettogethers`;
};
