import type { Reducer } from 'redux';

import type { BooksState } from './types';
import { BooksTypes } from './types';

const INITIAL_STATE: BooksState = {
  listBooks: [],
  loading: false,
  errorGetBooks: false,
};

const reducer: Reducer<BooksState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case BooksTypes.GET_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case BooksTypes.GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        listBooks: payload.listBooks,
        errorGetBooks: false,
      };
    case BooksTypes.GET_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        listBooks: [],
        errorGetBooks: true,
      };
    default:
      return state;
  }
};

export default reducer;
