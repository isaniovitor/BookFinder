import { combineReducers } from 'redux';

import books from './books';
import font from './font';
import theme from './theme';
import user from './user';

export default combineReducers({ theme, font, books, user });
