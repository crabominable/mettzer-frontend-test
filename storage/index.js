export const getAllFavoriteArticles = () => {
  const articles = JSON.parse(localStorage.getItem('favoriteArticles'))
  const filteredArticles = articles.filter((element, index) => index + 1 < 11 ? element : null)
  return filteredArticles
}

export const getAllFavoritePaginedArticles = (page) => {
  const articles = JSON.parse(localStorage.getItem('favoriteArticles'))
  const filteredArticles = []
  articles.forEach((element, index) => {
    if (index < 11) {
      let parseObj = {}
      parseObj = {
        ...element
      }
      return filteredArticles.push(parseObj)
    }
    if (parseInt(page) !== 1) {
      let parseObj = {}
      parseObj = {
        ...element
      }
      return filteredArticles.push(parseObj)
    }
  })
  let filteredPageArticles = []
  if (filteredArticles.length > 10) {
    const parsePage = parseInt(page) - 1
    const parseFinalPage = parsePage.toString()
    filteredPageArticles = filteredArticles.splice(parseInt(parseFinalPage + 0), parseInt(parseFinalPage + 9))
  }
  return filteredPageArticles
}

export const setEmptyFavoriteArticles = () => {
  const favoriteArticles = []
  localStorage.setItem('favoriteArticles', JSON.stringify(favoriteArticles))
}

export const checkFavoriteArticle = (id) => {
  const result = JSON.parse(localStorage.getItem('favoriteArticles'))
  return (result.some((item) => item.id === id))
}

export const setFavoriteArticle = (data) => {
  const result = JSON.parse(localStorage.getItem('favoriteArticles'))
  const check = result.some((item) => item.id === data.id)
  const favoriteArticle = JSON.parse(localStorage.getItem('favoriteArticles'))
  let newFavoriteArticle = []
  if (check) {
    newFavoriteArticle = favoriteArticle.filter((item) => item.id !== data.id)
  } else {
    newFavoriteArticle = [
      ...favoriteArticle,
      {
        id: data.id,
        authors: data.authors,
        type: data.type,
        title: data.title,
        description: data.description,
        urls: data.urls
      }
    ]
  }
  localStorage.setItem('favoriteArticles', JSON.stringify(newFavoriteArticle))
  return checkFavoriteArticle(data.id)
}

export const verifyAndSetArticles = ({ favoriteArticles, setCheckFavorite, id }) => {
  if (!favoriteArticles) {
    setEmptyFavoriteArticles()
  } else {
    setCheckFavorite(checkFavoriteArticle(id))
  }
}
