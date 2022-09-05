import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getArticles } from '../../redux/thunk/articleExtraReducer';

export default function Table() {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticles());
  })

  return (
    <div>
      <h1>Salve</h1>
    </div>
  )
}
