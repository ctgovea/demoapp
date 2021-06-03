import {marshall} from '@aws-sdk/util-dynamodb';
import {MeetingDto} from '../dto';
import {DynamoDbClient} from '../lib/dynamodb.client';

export class MeetingRepository {
  private _context: DynamoDbClient;

  constructor() {
    this._context = new DynamoDbClient();
  }

  async create(meeting: MeetingDto) {
    let item = {
      PK: `m#${meeting.id}`,
      SK: meeting.start,
      Details: {...meeting}
    }

    let input = {
      TableName: 'Meeting',
      Item: marshall(item, {removeUndefinedValues: true})
    }

    await this._context.putDocument(input);
  }

  async update(meeting: MeetingDto) {

  }

  async getById(id: string) {

  }

}
