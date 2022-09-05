import { configureStore } from '@reduxjs/toolkit';
import ArticleSliceReducer from '../redux/articleSlice';

const store = configureStore({
  reducer: {
    ArticleSlice: ArticleSliceReducer,
  },
});

export default store;