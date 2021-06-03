import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {plainToClass} from 'class-transformer';
import {validate} from 'class-validator';
import {v4 as uuid} from 'uuid';
import {MeetingDto} from '../dto';
import {MeetingRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class MeetingService {
  constructor(@repository(MeetingRepository) protected meetingRepository: MeetingRepository) {}

  /*
   * Add service methods here
   */
  async create(meeting: MeetingDto): Promise<object> {
    // TODO Create the meeting
    let jsonObject = meeting as Object;
    let dto = plainToClass(MeetingDto, jsonObject);

    const errors = await validate(dto);

    if (errors?.length > 0) {
      console.log(errors);
      throw new HttpErrors.UnprocessableEntity(errors.toString());
    }

    console.log(`creating meeting ${JSON.stringify(dto)}`)

    meeting.id = uuid();
    await this.meetingRepository.create(meeting);

    return {
      id: meeting.id
    };
  }

  async get(id: string) {
    // TODO Get the meeting
    console.log(`getting meeting with id ${id}`);
  }

  async update(meeting: MeetingDto) {
    // TODO Update the meeting
    console.log(`updating meeting ${JSON.stringify(meeting)}`)
  }
}
