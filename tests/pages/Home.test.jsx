import React from 'react'
// import Router from 'next/router'
import { render, screen } from '@testing-library/react'
// import { fireEvent } from '@testing-library/dom'
// import { act } from 'react-dom/test-utils';

import Home from '../../pages/index'

describe('Test suit dedicated to checking the existence of the header on the home page', () => {
  test('Test text and link that should to be in the DOM', () => {
    render(<Home />)
    const titleHeader = screen.getByText(/Mettzer Articles/i)
    const homeLink = screen.getByText(/Explorar/i)
    const favoriteLink = screen.getByText(/Favoritos/i)
    expect(titleHeader).toBeInTheDocument()
    expect(homeLink).toBeInTheDocument()
    expect(favoriteLink).toBeInTheDocument()
  })

  /* test('Test explore link can redirect', () => {
    jest.mock('next/router', () => ({
      Router: jest.fn().mockImplementation(() => ({
        pathname: '/'
      })),
    }))
    const spyRouter = jest.spyOn(Router, 'push');
    render(<Home />)
    const homeLink = screen.getByText(/Explorar/i)

    act(() => {
      fireEvent.click(homeLink);
    });

    expect(spyRouter).toHaveBeenCalled();
  })

  test('Test favorite link can redirect', () => {
    jest.mock('next/router', () => ({
      Router: jest.fn().mockImplementation(() => ({
        pathname: '/favorite'
      })),
    }))
    const spyRouter = jest.spyOn(Router, 'push');
    render(<Home />)
    const favoriteLink = screen.getByText(/Favoritos/i)

    act(() => {
      fireEvent.click(favoriteLink);
    });

    expect(spyRouter).toHaveBeenCalled();
  }) */
})
