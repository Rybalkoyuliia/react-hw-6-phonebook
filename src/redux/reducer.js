import { combineReducers } from 'redux';
import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS } from './constants';

const contactsInitialState = [
  { id: 1, name: 'Yuliia Rybalko', number: '(555)555-5555' },
  { id: 2, name: 'Ninja Jerd', number: '(837)476-2873' },
  { id: 3, name: 'Sidney Harrisson', number: '(736)482-7398' },
  { id: 4, name: 'Irma Lincoln', number: '(678)989-9003' },
  { id: 5, name: 'Kelly Maple', number: '(094)091-4905' },
  { id: 6, name: 'Dori Fisher', number: '(203)945-0981' },
  { id: 7, name: 'Edda Ildes', number: '(304)956-0982' },
  { id: 8, name: 'Serkan Balad', number: '(234)968-4934' },
  { id: 9, name: 'Balja Irden', number: '(845)872-0938' },
  { id: 10, name: 'Selin Simple', number: '(304)956-0984' },
  { id: 11, name: 'Ken Khan', number: '(859)309-4983' },
  { id: 12, name: 'Thor Parkins', number: '(850)730-4976' },
  { id: 13, name: 'Shrek Swamer', number: '(859)838-9893' },
  { id: 14, name: 'Nemo J. Fisher', number: '(839)384-0704' },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterInitialState = { filter: '' };

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
