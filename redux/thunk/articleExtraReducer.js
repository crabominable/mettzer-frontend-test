import { createAsyncThunk } from '@reduxjs/toolkit';

import ArticlesRequests from '../../utils';

export const getArticles = createAsyncThunk(
  'ArticleSlice/getArticles', () => ArticlesRequests.articlesRequest(),
);

export const extraReducers = (builder) => {
  builder.addCase(getArticles
    .fulfilled, (state, action) => {
      const statusCode = 200;
      if (action.payload.statusCode === statusCode) {
        const finalData = [];
        action.payload.body.data.forEach((element) => {
          const parseElement = {
            id: element._source.id,
            authors: element._source.authors,
            type: element._type,
            title: element._source.title,
            description: element._source.description,
            urls: element._source.urls
          };

          finalData.push(parseElement);
        });

        state.articles = finalData;
        state.loading = 'succeeded';
      }
    })
    .addCase(getArticles
      .rejected, (state) => {
        state.loading = 'failed';
      });
};