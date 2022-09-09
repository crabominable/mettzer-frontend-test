import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './main.module.css'

function Header () {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mettzer Articles</h1>
      <div className={styles.containerLinks}>
        <Link href='/'>
          <a className={ router.pathname === '/' ? styles.linkButtonActive : styles.linkButton }>
            Explorar
          </a>
        </Link>
        <Link href='/favorite'>
          <a className={ router.pathname === '/favorite' ? styles.linkButtonActive : styles.linkButton }>
            Favoritos
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Header
