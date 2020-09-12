import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Tailwind and Create React App/i);
  expect(title).toBeInTheDocument();
});
