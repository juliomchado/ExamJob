import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import { LoadArticle } from './actions';
import api from '../../../services/api';

function* LoadUserArticles(state) {
  const { id } = state.payload;

  const response = yield call(api.get, 'articles');

  const articles = response.data.map((data) => data.userID === id);

  if (articles) {
    yield put(LoadArticle(articles));
  }
}

export default all([
  takeLatest('USER_LOGIN', LoadUserArticles),
]);
