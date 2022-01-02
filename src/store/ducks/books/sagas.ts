import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { searchBooks } from '~/services/book';

import { getBooksSuccessAction, getBooksErrorAction } from './actions';
import type { GetBooksProps } from './types';
import { BooksTypes } from './types';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getBooksSagas(action: GetBooksProps) {
  try {
    const response: ResponseGenerator = yield call(
      searchBooks,
      action.payload.text,
      action.payload.index,
    );

    if (response.status >= 200 && response.status < 300) {
      const { listBooks } = yield select(
        (state: AplicationState) => state.books,
      );

      const moreBooks = response.data.items;
      console.tron.log('response', moreBooks);

      // if (action.payload.index === 0) {
      //   moreBooks = response.data.items;
      // } else {
      //   moreBooks = [...listBooks, ...response.data.items];
      // }

      yield put(getBooksSuccessAction(moreBooks));
    } else {
      yield put(getBooksErrorAction());
    }
  } catch {
    yield put(getBooksErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(BooksTypes.GET_BOOKS, getBooksSagas)]);
}
