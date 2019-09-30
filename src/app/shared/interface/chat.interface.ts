import { Contact } from './contact.interface';
import { Message } from '~/app/shared/interface/message.interface';

export interface Chat {
  id: string;
  contact: Contact;
  lastMessage: Message;
}
