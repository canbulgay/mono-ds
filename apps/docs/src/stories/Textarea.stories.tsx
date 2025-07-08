import { Label, Textarea } from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import * as React from 'react';

const meta: Meta<typeof Textarea> = {
  title: 'Core/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
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
    placeholder: 'Enter your message...',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a sample text in the textarea.',
    placeholder: 'Enter your message...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled',
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    defaultValue: 'This content cannot be edited.',
    disabled: true,
  },
};

export const WithRows: Story = {
  args: {
    placeholder: 'This textarea has 6 rows',
    rows: 6,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='message'>Message</Label>
      <Textarea id='message' placeholder='Type your message here.' />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='bio'>Bio</Label>
      <Textarea id='bio' placeholder='Tell us about yourself...' />
      <p className='text-sm text-muted-foreground'>
        Your bio will be displayed on your profile.
      </p>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label className='text-destructive' htmlFor='feedback'>
        Feedback
      </Label>
      <Textarea
        className='border-destructive'
        id='feedback'
        placeholder='Please provide your feedback'
      />
      <p className='text-sm text-destructive'>
        Feedback is required and must be at least 10 characters.
      </p>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className='w-full max-w-md space-y-4'>
      <div className='grid items-center gap-1.5'>
        <Label htmlFor='subject'>Subject</Label>
        <input
          className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          id='subject'
          placeholder='Enter subject'
        />
      </div>
      <div className='grid items-center gap-1.5'>
        <Label htmlFor='message-form'>Message</Label>
        <Textarea
          id='message-form'
          placeholder='Type your message here...'
          rows={5}
        />
      </div>
      <div className='grid items-center gap-1.5'>
        <Label htmlFor='additional-notes'>Additional Notes (Optional)</Label>
        <Textarea
          id='additional-notes'
          placeholder='Any additional notes...'
          rows={3}
        />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4 w-80'>
      <div className='space-y-2'>
        <Label>Small (3 rows)</Label>
        <Textarea placeholder='Small textarea' rows={3} />
      </div>
      <div className='space-y-2'>
        <Label>Medium (5 rows)</Label>
        <Textarea placeholder='Medium textarea' rows={5} />
      </div>
      <div className='space-y-2'>
        <Label>Large (8 rows)</Label>
        <Textarea placeholder='Large textarea' rows={8} />
      </div>
    </div>
  ),
};

export const WithCharacterCount: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const maxLength = 200;

    return (
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='tweet'>Tweet</Label>
        <Textarea
          id='tweet'
          maxLength={maxLength}
          placeholder="What's happening?"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <p className='text-sm text-muted-foreground text-right'>
          {value.length}/{maxLength}
        </p>
      </div>
    );
  },
};

export const ResizeNone: Story = {
  args: {
    placeholder: 'This textarea cannot be resized',
    className: 'resize-none',
  },
};
