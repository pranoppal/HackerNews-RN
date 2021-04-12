import {action, thunk} from 'easy-peasy';
import {fetchBestNewsListAPI} from '../../restApi';

export default {
  newsList: [],

  getNewsList: thunk((actions, payload) => {
    return fetchBestNewsListAPI().then(
      details => {
        return actions.updateNewsList(details);
      },
      error => {
        const errorPayload = 'error';
        return actions.updateNewsList(errorPayload);
      },
    );
  }),

  clearNewsList: thunk((actions, payload) => {
    return actions.updateNewsList([])
  }), 
  
  updateNewsList: action((state, payload) => {
    return {
      ...state,
      newsList: payload,
    };
  }),
};
