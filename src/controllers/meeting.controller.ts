// Uncomment these imports to begin using these cool features!

import {inject, service} from '@loopback/core';
import {
  get, getModelSchemaRef, param, post, put, Request, requestBody, response, RestBindings
} from '@loopback/rest';
import {MeetingDto} from '../dto/';
import {MeetingService} from '../services';

export class MeetingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request,
      @service(MeetingService) protected meetingService: MeetingService) {}

  @get('/meeting/{id}')
  @response(200, JSON)
  getMeeting(@param.path.string('id') id: string): object {
    return {
      id: id,
      headers: Object.assign({}, this.req.headers),
    };
  }

  @post('/meeting/')
  @response(200, JSON)
  async createMeeting(
    @requestBody({ content: { 'application/json': { schema: getModelSchemaRef(MeetingDto)} } })
    meeting: MeetingDto): Promise<object> {
    return await this.meetingService.create(meeting);
  }

  @put('/meeting/{id}')
  @response(200, JSON)
  updateMeeting(
    @param.path.string('id') id: string,
    @requestBody({ content: { 'application/json': { schema: JSON} } })
    meeting: JSON): object {

    return {
      id : id,
    };
  }
}

