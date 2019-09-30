import { Message } from '../interface/message.interface';
import { contactApi } from './sample-contacts';
import { Observable, of } from 'rxjs';

const getMessage = (id: string): Message => items.find(item => item.id === id);
const getMessages = (skip = 0, limit = 10): Message[] => items.slice(skip, limit);
const getChatMessages = (chatId: string, skip = 0, limit = 10): Message[] =>
  items.filter(msg => msg.chatId === chatId).slice(skip, limit);
const getChatMessageCount = (chatId: string): number => getChatMessages(chatId, 0, items.length).length;

const getMessage$ = (id: string): Observable<Message> => of(getMessage(id));
const getMessages$ = (skip = 0, limit = 10): Observable<Message[]> => of(getMessages());
const getChatMessages$ = (chatId: string, skip = 0, limit = 10): Observable<Message[]> =>
  of(getChatMessages(chatId, skip, limit));
const getChatMessageCount$ = (chatId: string): Observable<number> => of(getChatMessageCount(chatId));

export const messageApi = {
  getChatMessageCount$,
  getChatMessageCount,
  getChatMessages$,
  getChatMessages,
  getMessages$,
  getMessages,
  getMessage$,
  getMessage,
};

const message = (chatId, author, timestamp, type, text): Message => {
  return {
    id: Date.now().toString(),
    author,
    chatId,
    text,
    timestamp,
    type,
  };
};

const items: Message[] = [
  message(
    '1',
    contactApi.getContact('1'),
    '16:20',
    'incoming',
    'Hello there, my name is Donna Hawkins and I am sending you a message with regards to the phone you are selling',
  ),
  message('1', contactApi.getContact('you'), '16:25', 'outgoing', 'Hi! Thanks for reaching out!'),
  message('1', contactApi.getContact('1'), '16:25', 'incoming', 'Is the phone still available?'),
  message(
    '1',
    contactApi.getContact('you'),
    '16:30',
    'outgoing',
    "For sure, you can come and check it out if you're around!",
  ),
  message('1', contactApi.getContact('1'), '16:31', 'incoming', "That's great to hear!"),
  message('1', contactApi.getContact('1'), '16:31', 'incoming', 'Can you pass me your details?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('2', contactApi.getContact('2'), '16:10', 'incoming', 'Hi, how are you?'),
  message('3', contactApi.getContact('3'), '15:50', 'incoming', 'Did you call me?'),
  message(
    '4',
    contactApi.getContact('4'),
    '15:40',
    'incoming',
    'Hello there, my name is Alexander Lo and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '5',
    contactApi.getContact('5'),
    '15:20',
    'incoming',
    'Hello there, my name is Vildan Mayhoş and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '6',
    contactApi.getContact('6'),
    'yesterday',
    'incoming',
    'Hello there, my name is Ariane Ma and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '7',
    contactApi.getContact('7'),
    'yesterday',
    'incoming',
    'Hello there, my name is Meral Solmaz and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '8',
    contactApi.getContact('8'),
    'yesterday',
    'incoming',
    'Hello there, my name is Cecilie Madsen and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '9',
    contactApi.getContact('9'),
    'yesterday',
    'incoming',
    'Hello there, my name is Maxime Chow and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '10',
    contactApi.getContact('10'),
    'last week',
    'incoming',
    'Hello there, my name is Jeanette Mitchell and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '11',
    contactApi.getContact('11'),
    'last week',
    'incoming',
    'Hello there, my name is Felix Sørensen and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '12',
    contactApi.getContact('12'),
    'last week',
    'incoming',
    'Hello there, my name is Arzu Grüner and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '13',
    contactApi.getContact('13'),
    'last week',
    'incoming',
    'Hello there, my name is Monica Campos and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '14',
    contactApi.getContact('14'),
    'last week',
    'incoming',
    'Hello there, my name is Dave Gilbert and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '15',
    contactApi.getContact('15'),
    'last week',
    'incoming',
    'Hello there, my name is Silas Thomsen and I am sending you a message with regards to the phone you are selling',
  ),
  message(
    '16',
    contactApi.getContact('16'),
    'last week',
    'incoming',
    'Hello there, my name is Mehmet Eronat and I am sending you a message with regards to the phone you are selling',
  ),
];
