import {DynamoDBClient, GetItemCommand, GetItemCommandInput, PutItemCommand, PutItemInput} from '@aws-sdk/client-dynamodb';

export class DynamoDbClient {

  private _client: DynamoDBClient;

  constructor() {
    const params = {
      credentials: {
        accessKeyId: 'xxx',
        secretAccessKey: 'xxx',
      },
      region: 'us-west-2',
      endpoint: 'http://localhost:8000'
    }

    this._client = new DynamoDBClient(params);
  }

  async putDocument(input: PutItemInput) {
    try {
      await this._client.send(new PutItemCommand(input));
    } catch (error) {
      console.log(`Error while putting item in DynamoDB: ${error}`);
      throw error;
    }
  }

  async getItem(input: GetItemCommandInput) {
    try {
      await this._client.send(new GetItemCommand(input));
    } catch (error) {
      console.log(`Error while putting item in DynamoDB: ${error}`);
      throw error;
    }
  }

}
