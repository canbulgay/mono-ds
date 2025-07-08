import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Card> = {
  title: 'Core/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className='w-80'>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Card content goes here. This is where you would put the main content
          of your card.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className='w-80'>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card includes a footer section</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with actions in the footer.</p>
      </CardContent>
      <CardFooter>
        <Button className='mr-2' variant='outline'>
          Cancel
        </Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className='w-80'>
      <CardContent className='p-6'>
        <p>A simple card with just content, no header or footer.</p>
      </CardContent>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card className='w-80'>
      <CardHeader>
        <CardTitle>Product Name</CardTitle>
        <CardDescription>$99.99</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='w-full h-32 bg-gray-200 rounded-md mb-4' />
        <p className='text-sm text-gray-600'>
          This is a sample product description that shows how the card can be
          used for e-commerce.
        </p>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Add to Cart</Button>
      </CardFooter>
    </Card>
  ),
};

export const StatCard: Story = {
  render: () => (
    <Card className='w-80'>
      <CardHeader className='pb-2'>
        <CardDescription>Total Revenue</CardDescription>
        <CardTitle className='text-2xl'>$45,231.89</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-xs text-muted-foreground'>
          +20.1% from last month
        </div>
      </CardContent>
    </Card>
  ),
};

export const NotificationCard: Story = {
  render: () => (
    <Card className='w-80'>
      <CardHeader>
        <div className='flex items-center space-x-2'>
          <div className='w-2 h-2 bg-blue-500 rounded-full' />
          <CardTitle className='text-sm'>New Notification</CardTitle>
        </div>
        <CardDescription>2 minutes ago</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm'>You have a new message from John Doe.</p>
      </CardContent>
      <CardFooter>
        <Button size='sm' variant='ghost'>
          Mark as Read
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const CompactCard: Story = {
  render: () => (
    <Card className='w-80'>
      <CardHeader className='pb-3'>
        <CardTitle className='text-sm'>Compact Card</CardTitle>
      </CardHeader>
      <CardContent className='pt-0'>
        <p className='text-xs text-muted-foreground'>
          A more compact card design for dense layouts.
        </p>
      </CardContent>
    </Card>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-4 w-[640px]'>
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
        </CardHeader>
        <CardContent>
          <p>First card content</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Second card content</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Third card content</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 4</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Fourth card content</p>
        </CardContent>
      </Card>
    </div>
  ),
};
