import { Contact } from '../interface/contact.interface';
import { Observable, of } from 'rxjs';
import { sortBy } from 'lodash';

const getContact = (id: string): Contact => items.find(item => item.id === id);
const getContact$ = (id: string): Observable<Contact> => of(getContact(id));
const getContacts = (): Contact[] => sortBy(items, 'name').filter(item => item.id !== 'you');
const getContacts$ = (): Observable<Contact[]> => of(getContacts());

export const contactApi = {
  getContacts$,
  getContacts,
  getContact$,
  getContact,
};

const items: Contact[] = [
  {
    id: 'you', // This is the 'currently logged in' user
    name: 'Noélie Roussel',
    email: 'Noelie.Roussel@example.com',
    username: 'smallgorilla601',
    avatar: '~/images/women-82.jpg',
  },
  {
    id: '1',
    name: 'Donna Hawkins',
    email: 'Donna.Hawkins@example.com',
    username: 'ticklishzebra801',
    avatar: '~/images/women-72.jpg',
  },
  {
    id: '2',
    name: 'Iina Salminen',
    email: 'Iina.Salminen@example.com',
    username: 'tinydog150',
    avatar: '~/images/women-35.jpg',
  },
  {
    id: '3',
    name: 'Blaise Lefebvre',
    email: 'Blaise.Lefebvre@example.com',
    username: 'redbutterfly266',
    avatar: '~/images/men-90.jpg',
  },
  {
    id: '4',
    name: 'Alexander Lo',
    email: 'Alexander.Lo@example.com',
    username: 'crazybear374',
    avatar: '~/images/men-12.jpg',
  },
  {
    id: '5',
    name: 'Vildan Mayhoş',
    email: 'Vildan.Mayhos@example.com',
    username: 'blackrabbit701',
    avatar: '~/images/women-40.jpg',
  },
  {
    id: '6',
    name: 'Ariane Ma',
    email: 'Ariane.Ma@example.com',
    username: 'beautifulostrich684',
    avatar: '~/images/women-64.jpg',
  },
  {
    id: '7',
    name: 'Meral Solmaz',
    email: 'Meral.Solmaz@example.com',
    username: 'lazykoala394',
    avatar: '~/images/women-18.jpg',
  },
  {
    id: '8',
    name: 'Cecilie Madsen',
    email: 'Cecilie.Madsen@example.com',
    username: 'purplegorilla114',
    avatar: '~/images/women-72.jpg',
  },
  {
    id: '9',
    name: 'Maxime Chow',
    email: 'Maxime.Chow@example.com',
    username: 'organicsnake962',
    avatar: '~/images/men-3.jpg',
  },
  {
    id: '10',
    name: 'Jeanette Mitchell',
    email: 'Jeanette.Mitchell@example.com',
    username: 'redrabbit939',
    avatar: '~/images/women-11.jpg',
  },
  {
    id: '11',
    name: 'Felix Sørensen',
    email: 'Felix.Sorensen@example.com',
    username: 'smallkoala806',
    avatar: '~/images/men-18.jpg',
  },
  {
    id: '12',
    name: 'Arzu Grüner',
    email: 'Arzu.Gruner@example.com',
    username: 'angryzebra112',
    avatar: '~/images/women-77.jpg',
  },
  {
    id: '13',
    name: 'Monica Campos',
    email: 'Monica.Campos@example.com',
    username: 'purpledog288',
    avatar: '~/images/women-56.jpg',
  },
  {
    id: '14',
    name: 'Dave Gilbert',
    email: 'Dave.Gilbert@example.com',
    username: 'beautifulbird306',
    avatar: '~/images/men-10.jpg',
  },
  {
    id: '15',
    name: 'Silas Thomsen',
    email: 'Silas.Thomsen@example.com',
    username: 'bigelephant848',
    avatar: '~/images/men-39.jpg',
  },
  {
    id: '16',
    name: 'Mehmet Eronat',
    email: 'Mehmet.Eronat@example.com',
    username: 'purpleladybug710',
    avatar: '~/images/men-68.jpg',
  },
];
