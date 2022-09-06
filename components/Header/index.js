import React from 'react';
import Link from 'next/link';

import styles from './main.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mettzer Articles</h1>
      <p className={`${styles.titleText}`}>Clique <Link href='/favorite'>aqui</Link> para listar os favoritos</p>
    </div>
  )
}

export default Header;