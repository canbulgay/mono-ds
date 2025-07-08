import { Input, Label } from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Label> = {
  title: 'Core/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'The id of the form element this label is associated with',
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
    children: 'Label',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='email'>Email</Label>
      <Input id='email' placeholder='Email' type='email' />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='username'>
        Username <span className='text-red-500'>*</span>
      </Label>
      <Input required id='username' placeholder='Username' />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='password'>Password</Label>
      <Input id='password' placeholder='Password' type='password' />
      <p className='text-sm text-muted-foreground'>
        Your password must be at least 8 characters.
      </p>
    </div>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label
        className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        htmlFor='disabled-input'
      >
        Disabled Input
      </Label>
      <Input disabled id='disabled-input' placeholder='Disabled' />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className='w-full max-w-sm space-y-4'>
      <div className='grid items-center gap-1.5'>
        <Label htmlFor='name'>Name</Label>
        <Input id='name' placeholder='Enter your name' />
      </div>
      <div className='grid items-center gap-1.5'>
        <Label htmlFor='email-form'>Email</Label>
        <Input id='email-form' placeholder='Enter your email' type='email' />
      </div>
      <div className='grid items-center gap-1.5'>
        <Label htmlFor='message'>Message</Label>
        <textarea
          className='flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          id='message'
          placeholder='Enter your message'
        />
      </div>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label className='text-destructive' htmlFor='error-input'>
        Email
      </Label>
      <Input
        className='border-destructive'
        id='error-input'
        placeholder='Email'
        type='email'
      />
      <p className='text-sm text-destructive'>
        Please enter a valid email address.
      </p>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label className='text-lg font-bold text-blue-600' htmlFor='custom-input'>
        Custom Styled Label
      </Label>
      <Input id='custom-input' placeholder='Custom input' />
    </div>
  ),
};
