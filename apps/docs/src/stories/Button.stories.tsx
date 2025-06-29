import { Button } from '@design-system/core';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Buttons are used to trigger actions or events. They can be styled with different sizes, colors, and shapes.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    size: 'default',
    palette: 'primary',
    shape: 'default',
    block: false,
    loading: false,
    icon: null,
    as: 'button',
    type: 'button',
    prefix: null,
    onClick: () => alert('Button clicked!'),
    disabled: false,
    dataTestId: 'button',
    className: '',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'medium', 'small', 'heightless', 'large'],
    },
    palette: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    shape: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'circle'],
    },
    block: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    children: 'Click Me',
  },
};
