import { all, fork } from 'redux-saga/effects';

import book from '../ducks/books/sagas';

export default function* rootSaga() {
  // yield == await
  yield all([fork(book)]);
}
