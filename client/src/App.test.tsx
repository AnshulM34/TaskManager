import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import App from './App';

describe('testing app', () => {
  test('load app', async () => {
    render(<App/>)
    expect(screen.getByTestId('app')).toBeInTheDocument();
  })
})

