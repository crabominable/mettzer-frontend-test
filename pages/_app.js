import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import store from '../store'

import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    // your custom props here
  })
}

export default MyApp
