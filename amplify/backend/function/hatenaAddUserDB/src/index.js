/* Amplify Params - DO NOT EDIT
	API_ARTICLEDB_APIID
	API_ARTICLEDB_APINAME
	API_HATENATEST_GRAPHQLAPIENDPOINTOUTPUT
	API_HATENATEST_GRAPHQLAPIIDOUTPUT
	API_HATENATEST_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const tableName = 'User-bso5adepnnarhn37mr7rla7yma-dev';

exports.handler = async (event) => {
    try {
        const userAttributes = event.request.userAttributes;
        const userId = userAttributes.sub;
        const name = userAttributes.name;
        const email = userAttributes.email;

        const params = {
            TableName: tableName,
            Item: {
                id: userId,
                name: name,
                email: email,
            },
        };

        await dynamoDB.put(params).promise();
        console.log(`User ${userId} added to DynamoDB`);
    } catch (error) {
        console.error('Error adding user to DynamoDB:', error.message);
        return {
            statusCode: 500,
            body: JSON.stringify('Error adding user to DynamoDB'),
        };
    }

    return event;
};
