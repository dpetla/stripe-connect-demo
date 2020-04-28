import * as aws from "aws-sdk";

const dynamoDB = new aws.DynamoDB.DocumentClient({ region: "us-east-1" });

export default dynamoDB;
