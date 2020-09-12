import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

export const Primary = () => <Button variant="primary" label="Label" />;

export const Secondary = () => <Button variant="secondary" label="Label" />;
