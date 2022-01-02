import type { BooksState } from '~/store/ducks/books/types';
import type { FontState } from '~/store/ducks/font/types';
import type { ThemeState } from '~/store/ducks/theme/types';

export interface AplicationState {
  theme: ThemeState;
  font: FontState;
  books: BooksState;
}
