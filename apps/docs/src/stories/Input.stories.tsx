import { Input } from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Input> = {
  title: 'Core/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The type of input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
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
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Sample text',
    placeholder: 'Enter text...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password...',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number...',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const File: Story = {
  args: {
    type: 'file',
  },
};

export const FormExample: Story = {
  render: () => (
    <div className='space-y-4 w-80'>
      <div className='space-y-2'>
        <label className='text-sm font-medium' htmlFor='name'>
          Name
        </label>
        <Input id='name' placeholder='Enter your name' />
      </div>
      <div className='space-y-2'>
        <label className='text-sm font-medium' htmlFor='email'>
          Email
        </label>
        <Input id='email' placeholder='Enter your email' type='email' />
      </div>
      <div className='space-y-2'>
        <label className='text-sm font-medium' htmlFor='password'>
          Password
        </label>
        <Input
          id='password'
          placeholder='Enter your password'
          type='password'
        />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4 w-80'>
      <Input placeholder='Default size' />
      <Input className='h-8 text-sm' placeholder='Small size' />
      <Input className='h-12 text-base' placeholder='Large size' />
    </div>
  ),
};
