import {IsDateString, IsDefined} from 'class-validator';
import {ContactDto} from './contact.dto';

export class MeetingDto {
  id: string;

  @IsDefined()
  @IsDateString()
  start: string;

  @IsDefined()
  @IsDateString()
  end: string;

  participants: ContactDto[];
}
