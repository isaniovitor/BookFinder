import { action } from 'typesafe-actions';

import type {
  GetBooksProps,
  GetBooksErrorProps,
  GetBooksSuccessProps,
} from './types';
import { BooksTypes } from './types';

export const getBooksAction = (text: string, index: number): GetBooksProps =>
  action(BooksTypes.GET_BOOKS, { text, index });

export const getBooksSuccessAction = (listBooks: any): GetBooksSuccessProps =>
  action(BooksTypes.GET_BOOKS_SUCCESS, { listBooks });

export const getBooksErrorAction = (): GetBooksErrorProps =>
  action(BooksTypes.GET_BOOKS_ERROR);
