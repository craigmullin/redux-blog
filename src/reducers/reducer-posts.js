import { FETCH_POSTS } from '../actions';
import lodash from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return statel
  }
}