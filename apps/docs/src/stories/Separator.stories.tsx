import { Separator } from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Separator> = {
  title: 'Core/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
    decorative: {
      control: 'boolean',
      description:
        'Whether the separator is decorative (true) or semantic (false)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className='w-64'>
      <div className='space-y-1'>
        <h4 className='text-sm font-medium leading-none'>Radix Primitives</h4>
        <p className='text-sm text-muted-foreground'>
          An open-source UI component library.
        </p>
      </div>
      <Separator className='my-4' />
      <div className='flex h-5 items-center space-x-4 text-sm'>
        <div>Blog</div>
        <Separator orientation='vertical' />
        <div>Docs</div>
        <Separator orientation='vertical' />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className='flex h-20 items-center space-x-4 text-sm'>
      <div>Blog</div>
      <Separator orientation='vertical' />
      <div>Docs</div>
      <Separator orientation='vertical' />
      <div>Source</div>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <div className='flex items-center space-x-2 text-sm'>
      <span>Home</span>
      <Separator orientation='vertical' className='h-4' />
      <span>Products</span>
      <Separator orientation='vertical' className='h-4' />
      <span>About</span>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className='rounded-lg border bg-card p-6 shadow-sm'>
      <div className='space-y-1'>
        <h3 className='text-lg font-semibold'>Account Settings</h3>
        <p className='text-sm text-muted-foreground'>
          Manage your account settings and preferences.
        </p>
      </div>
      <Separator className='my-4' />
      <div className='space-y-3'>
        <div className='flex items-center justify-between'>
          <div className='space-y-0.5'>
            <div className='text-sm font-medium'>Email Notifications</div>
            <div className='text-sm text-muted-foreground'>
              Receive notifications via email
            </div>
          </div>
          <input type='checkbox' className='rounded' />
        </div>
        <Separator />
        <div className='flex items-center justify-between'>
          <div className='space-y-0.5'>
            <div className='text-sm font-medium'>Push Notifications</div>
            <div className='text-sm text-muted-foreground'>
              Receive notifications on your device
            </div>
          </div>
          <input type='checkbox' className='rounded' />
        </div>
        <Separator />
        <div className='flex items-center justify-between'>
          <div className='space-y-0.5'>
            <div className='text-sm font-medium'>Marketing</div>
            <div className='text-sm text-muted-foreground'>
              Receive marketing and promotional emails
            </div>
          </div>
          <input type='checkbox' className='rounded' />
        </div>
      </div>
    </div>
  ),
};

export const InNavigation: Story = {
  render: () => (
    <nav className='flex items-center space-x-4 text-sm font-medium'>
      <a href='#' className='text-foreground hover:text-foreground/80'>
        Dashboard
      </a>
      <Separator orientation='vertical' className='h-4' />
      <a href='#' className='text-muted-foreground hover:text-foreground/80'>
        Projects
      </a>
      <Separator orientation='vertical' className='h-4' />
      <a href='#' className='text-muted-foreground hover:text-foreground/80'>
        Settings
      </a>
      <Separator orientation='vertical' className='h-4' />
      <a href='#' className='text-muted-foreground hover:text-foreground/80'>
        Help
      </a>
    </nav>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className='w-64 space-y-4'>
      <div>
        <h4 className='text-sm font-medium'>Default Separator</h4>
        <Separator className='my-2' />
        <p className='text-sm text-muted-foreground'>
          Standard separator styling
        </p>
      </div>

      <div>
        <h4 className='text-sm font-medium'>Colored Separator</h4>
        <Separator className='my-2 bg-blue-500' />
        <p className='text-sm text-muted-foreground'>Blue colored separator</p>
      </div>

      <div>
        <h4 className='text-sm font-medium'>Thick Separator</h4>
        <Separator className='my-2 h-0.5' />
        <p className='text-sm text-muted-foreground'>Thicker separator</p>
      </div>

      <div>
        <h4 className='text-sm font-medium'>Dashed Separator</h4>
        <Separator className='my-2 border-dashed border-t border-border bg-transparent h-0' />
        <p className='text-sm text-muted-foreground'>Dashed border separator</p>
      </div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div className='w-64 space-y-0'>
      <div className='p-3 hover:bg-accent rounded-t-lg'>
        <div className='font-medium'>First Item</div>
        <div className='text-sm text-muted-foreground'>
          Description of first item
        </div>
      </div>
      <Separator />
      <div className='p-3 hover:bg-accent'>
        <div className='font-medium'>Second Item</div>
        <div className='text-sm text-muted-foreground'>
          Description of second item
        </div>
      </div>
      <Separator />
      <div className='p-3 hover:bg-accent rounded-b-lg'>
        <div className='font-medium'>Third Item</div>
        <div className='text-sm text-muted-foreground'>
          Description of third item
        </div>
      </div>
    </div>
  ),
};
