import { Contact } from './contact.interface';

export interface Message {
  id: string;
  chatId: string;
  author: Contact;
  text: string;
  timestamp: Date | string;
  type: 'incoming' | 'outgoing';
}
