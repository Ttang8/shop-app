import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null,
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, nullUser, { currentUser });
    default:
      return state;
  }
};

export default SessionReducer;
