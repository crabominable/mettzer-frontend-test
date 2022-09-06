import { createSlice } from '@reduxjs/toolkit'

import { extraReducers } from './thunk/articleExtraReducer'

const initialState = {
  articles: [],
  loading: 'idle'
}

export const ArticleSlice = createSlice({
  name: 'ArticleSlice',
  initialState,
  extraReducers,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setArticles } = ArticleSlice.actions

export default ArticleSlice.reducer
