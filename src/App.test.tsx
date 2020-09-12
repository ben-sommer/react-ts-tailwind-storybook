import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders links to docs', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Create React App, Tailwind & Storybook/i);
  expect(title).toBeInTheDocument();
});
