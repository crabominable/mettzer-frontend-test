import { createSlice } from '@reduxjs/toolkit'

import { extraReducers } from './thunk/articleExtraReducer'

const initialState = {
  articles: [],
  loading: 'idle',
  localStoragePagination: 1
}

export const ArticleSlice = createSlice({
  name: 'ArticleSlice',
  initialState,
  extraReducers,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload
    },
    setLocalStoragePagination: (state, action) => {
      state.localStoragePagination = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setArticles, setLocalStoragePagination } = ArticleSlice.actions

export default ArticleSlice.reducer
