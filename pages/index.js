import React from 'react'
import Head from 'next/head'

import {
  Header,
  Table,
  Pagination
} from '../components'

export default function Home () {
  return (
    <>
      <Head>
        <title>Mettzer Articles</title>
      </Head>
      <Header />
      <Table />
      <Pagination />
    </>
  )
}
