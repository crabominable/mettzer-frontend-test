import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { getArticles } from '../../redux/thunk/articleExtraReducer'
import { setArticles } from '../../redux/articleSlice'
import Row from './components/Row'
import { getAllFavoriteArticles } from '../../storage'

import styles from './main.module.css'

export default function Table () {
  const dispatch = useDispatch()
  const { articles } = useSelector((state) => state.ArticleSlice)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') {
      dispatch(getArticles())
    }
  }, [])

  useEffect(() => {
    if (router.pathname === '/favorite') {
      const favoriteStorageArticles = getAllFavoriteArticles()
      dispatch(setArticles(favoriteStorageArticles))
    }
  }, [])

  return (
    <table className={styles.container}>
      <thead className={styles.containerStructure}>
        <tr className={styles.trContent}>
          <th className={styles.theadContent}>Authors</th>
          <th className={styles.theadContent}>Type</th>
          <th className={styles.theadContent}>Title</th>
          <th className={styles.theadContent}>Description</th>
          <th className={styles.theadContent}>Urls</th>
          <th className={styles.theadContent}>Favorite</th>
        </tr>
      </thead>
      <tbody className={styles.containerStructure}>
        { !articles
          ? 'loading'
          : articles.map((item, index) => (
            <Row key={index} data={item} />
          )) }
      </tbody>
    </table>
  )
}
