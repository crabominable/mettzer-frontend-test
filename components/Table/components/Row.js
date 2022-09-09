import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as unfavorite } from '@fortawesome/free-regular-svg-icons'
import { faHeart as favorited } from '@fortawesome/free-solid-svg-icons'

import {
  getAllFavoriteArticles,
  checkFavoriteArticle,
  setFavoriteArticle,
  verifyAndSetArticles
} from '../../../storage'

import styles from '../main.module.css'

export default function Row ({ data }) {
  const [checkFavorite, setCheckFavorite] = useState(false)

  useEffect(() => {
    const favoriteArticles = getAllFavoriteArticles()

    const params = {
      favoriteArticles,
      setCheckFavorite,
      id: data.id
    }

    verifyAndSetArticles(params)
  }, [])

  function setFavorite () {
    if (checkFavorite) {
      setFavoriteArticle(data)
      return setCheckFavorite(false)
    }
    setFavoriteArticle(data)
    setCheckFavorite(checkFavoriteArticle(data.id))
  }

  return (
    <tr className={styles.trContent}>
      <td className={styles.rowContent}>{data.authors}</td>
      <td className={styles.rowContent}>{data.type}</td>
      <td className={styles.rowContent}>{data.title}</td>
      <td className={styles.rowContent}>{data.description}</td>
      <td className={styles.rowContent}><a href={`${data.urls[0]}`}>{data.urls}</a></td>
      <td className={styles.rowContent}>{ !checkFavoriteArticle(data.id) ? <a onClick={ () => setFavorite() }><FontAwesomeIcon icon={unfavorite} /></a> : <a onClick={ () => setFavorite() }><FontAwesomeIcon icon={favorited} /></a> }</td>
    </tr>
  )
}

Row.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    urls: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}
