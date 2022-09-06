import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getArticles } from '../../redux/thunk/articleExtraReducer';
import Row from './components/Row';

import styles from './main.module.css';

export default function Table() {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.ArticleSlice);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <table className={styles.container}>
      <thead className={styles.containerStructure}>
        <tr>
          <th className={styles.theadContent}>Authors</th>
          <th className={styles.theadContent}>Type</th>
          <th className={styles.theadContent}>Title</th>
          <th className={styles.theadContent}>Description</th>
          <th className={styles.theadContent}>Urls</th>
          <th className={styles.theadContent}>Favorite</th>
        </tr>
      </thead>
      <tbody className={styles.containerStructure}>
        { !articles ? 'loading' : articles.map((item, index) => (
          <Row key={index} data={item} />
        )) }
      </tbody>
    </table>
  )
}
