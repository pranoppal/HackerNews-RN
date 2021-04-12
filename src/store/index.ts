import {createStore} from 'easy-peasy';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import topNews from './models/topNews';
import newNews from './models/newNews';
import bestNews from './models/bestNews';

const configuredLogger = createLogger({collapsed: true});

const store = createStore(
  {
    topNews,
    bestNews,
    newNews,
  },
  {
    disableImmer: true,
    middleware: [thunk, configuredLogger],
  },
);

export default store;
