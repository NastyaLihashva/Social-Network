import { render, screen } from '@testing-library/react';;
import SocialApp from './App';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SocialApp />, div);
  unmountComponentAtNode(div);
});
