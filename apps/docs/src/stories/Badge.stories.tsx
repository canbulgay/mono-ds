import { Badge } from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Badge> = {
  title: 'Core/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The variant of the badge',
    },
    children: {
      control: 'text',
      description: 'The content of the badge',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className='flex gap-2'>
      <Badge variant='default'>Default</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge variant='outline'>Outline</Badge>
    </div>
  ),
};

export const WithNumbers: Story = {
  render: () => (
    <div className='flex gap-2'>
      <Badge>1</Badge>
      <Badge variant='secondary'>99+</Badge>
      <Badge variant='destructive'>5</Badge>
      <Badge variant='outline'>New</Badge>
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    children: 'Custom',
    variant: 'default',
    className: 'bg-blue-500 text-white hover:bg-blue-600',
  },
};
