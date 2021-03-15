import { v4 as uuidv4 } from 'uuid';
import contactTypes from './contact-types';

export const addContact = (name, phone) => ({
    type: contactTypes.ADD,
    payload: {
        id: uuidv4(),
        name: name,
        phone: phone,
    }
})

export const deleteContact = contactId => ({
  type: contactTypes.DELETE,
  payload: contactId,
});

export const changeFilter = (filter) => ({
  type: contactTypes.CHANGE_FILTER,
  payload: { filter },
});

