import React from 'react'
// import Router from 'next/router'
import { render, screen } from '@testing-library/react'
// import { fireEvent } from '@testing-library/dom'
// import { act } from 'react-dom/test-utils';

import Favorite from '../../pages/index'

describe('Test suit dedicated to checking the existence of the header on the Favorite page', () => {
  test('Test text and link that should to be in the DOM', () => {
    render(<Favorite />)
    const titleHeader = screen.getByText(/Mettzer Articles/i)
    const exploreLink = screen.getByText(/Explorar/i)
    const favoriteLink = screen.getByText(/Favoritos/i)
    expect(titleHeader).toBeInTheDocument()
    expect(exploreLink).toBeInTheDocument()
    expect(favoriteLink).toBeInTheDocument()
  })

  /* test('Test explore link can redirect', () => {
    jest.mock('next/router', () => ({
      Router: jest.fn().mockImplementation(() => ({
        pathname: '/'
      })),
    }))
    const spyRouter = jest.spyOn(Router, 'push');
    render(<Favorite />)
    const favoriteLink = screen.getByText(/Explorar/i)

    act(() => {
      fireEvent.click(favoriteLink);
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
    render(<Favorite />)
    const favoriteLink = screen.getByText(/Favoritos/i)

    act(() => {
      fireEvent.click(favoriteLink);
    });

    expect(spyRouter).toHaveBeenCalled();
  }) */
})
