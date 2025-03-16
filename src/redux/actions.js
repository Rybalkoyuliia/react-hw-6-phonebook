import { nanoid } from 'nanoid';

export const addContact = contact => {
  return {
    type: 'add',
    payload: { id: nanoid(4), name: contact.name, number: contact.number },
  };
};

export const deleteContact = contactId => {
  return { type: 'delete', payload: contactId };
};

export const filterContacts = value => {
  return { type: 'filter', payload: value };
};
