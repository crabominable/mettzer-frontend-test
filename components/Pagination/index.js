import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { getPaginedArticles } from '../../redux/thunk/articleExtraReducer'
import { getAllFavoritePaginedArticles } from '../../storage'
import { setArticles } from '../../redux/articleSlice'

import styles from './main.module.css'

export default function Pagination () {
  const [pageNumbersArray, setPageNumbersArray] = useState([])
  const [page, setPage] = useState(1)
  const [checkPage, setCheckPage] = useState(false)

  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') {
      if (page > 0 && checkPage) {
        dispatch(getPaginedArticles(page))
      }
      if (page === 1) {
        setPageNumbersArray([1, 2, 3, 4, 5])
      } else {
        setPageNumbersArray([parseInt(page) - 1, parseInt(page), parseInt(page) + 1, parseInt(page) + 2, parseInt(page) + 3])
      }
    }
  }, [page])

  useEffect(() => {
    if (router.pathname === '/favorite') {
      if (page > 0 && checkPage) {
        const favoriteStorageArticles = getAllFavoritePaginedArticles(page)
        // console.log(favoriteStorageArticles)
        dispatch(setArticles(favoriteStorageArticles))
      }
      if (page === 1) {
        setPageNumbersArray([1, 2, 3, 4, 5])
      } else {
        setPageNumbersArray([parseInt(page) - 1, parseInt(page), parseInt(page) + 1, parseInt(page) + 2, parseInt(page) + 3])
      }
    }
  }, [page])

  function handleClick (event) {
    if (parseInt(event.target.id) < 1) {
      return
    }
    setCheckPage(true)
    return setPage(event.target.id)
  }

  return (
    <nav className={styles.container}>
      <ul className={styles.ulContainer}>
        { pageNumbersArray.map((element, index) => {
          return (
            <li className={styles.liContainer} key={index}>
              <button
                id={element}
                className={ parseInt(page) === parseInt(element) ? styles.buttonActualContainer : styles.buttonContainer}
                onClick={ (event) => handleClick(event) }
              >
                {element}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
