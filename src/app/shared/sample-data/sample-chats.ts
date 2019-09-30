import { Chat } from '../interface/chat.interface';
import { contactApi } from './sample-contacts';
import { messageApi } from './sample-messages';
import { Observable, of } from 'rxjs';

export const chatApi = {
  getChats$: (): Observable<Chat[]> => of(items),
  getChats: (): Chat[] => items,
  getChat$: (id: string): Observable<Chat> => of(items.find(item => item.id === id)),
  getChat: (id: string): Chat => items.find(item => item.id === id),
};

const getLastChatMessage = id => messageApi.getChatMessages(id).reverse()[0];

const items: Chat[] = [
  {
    id: '1',
    contact: contactApi.getContact('1'),
    lastMessage: getLastChatMessage('1'),
  },
  {
    id: '2',
    contact: contactApi.getContact('2'),
    lastMessage: getLastChatMessage('2'),
  },
  {
    id: '3',
    contact: contactApi.getContact('3'),
    lastMessage: getLastChatMessage('3'),
  },
  {
    id: '4',
    contact: contactApi.getContact('4'),
    lastMessage: getLastChatMessage('4'),
  },
  {
    id: '5',
    contact: contactApi.getContact('5'),
    lastMessage: getLastChatMessage('5'),
  },
  {
    id: '6',
    contact: contactApi.getContact('6'),
    lastMessage: getLastChatMessage('6'),
  },
  {
    id: '7',
    contact: contactApi.getContact('7'),
    lastMessage: getLastChatMessage('7'),
  },
  {
    id: '8',
    contact: contactApi.getContact('8'),
    lastMessage: getLastChatMessage('8'),
  },
  {
    id: '9',
    contact: contactApi.getContact('9'),
    lastMessage: getLastChatMessage('9'),
  },
  {
    id: '10',
    contact: contactApi.getContact('10'),
    lastMessage: getLastChatMessage('10'),
  },
  {
    id: '11',
    contact: contactApi.getContact('11'),
    lastMessage: getLastChatMessage('11'),
  },
  {
    id: '12',
    contact: contactApi.getContact('12'),
    lastMessage: getLastChatMessage('12'),
  },
  {
    id: '13',
    contact: contactApi.getContact('13'),
    lastMessage: getLastChatMessage('13'),
  },
  {
    id: '14',
    contact: contactApi.getContact('14'),
    lastMessage: getLastChatMessage('14'),
  },
  {
    id: '15',
    contact: contactApi.getContact('15'),
    lastMessage: getLastChatMessage('15'),
  },
  {
    id: '16',
    contact: contactApi.getContact('16'),
    lastMessage: getLastChatMessage('16'),
  },
];
