import { Alert, AlertDescription, AlertTitle } from '@design-system/core';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  title: 'Core/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      description: 'Visual variant of the alert',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
      <Info className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is a default alert with some information for the user.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <XCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again later.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert className="w-96 border-green-200 text-green-800 dark:border-green-900/50 dark:text-green-400">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert className="w-96 border-yellow-200 text-yellow-800 dark:border-yellow-900/50 dark:text-yellow-400">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This action cannot be undone. Please proceed with caution.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <Alert className="w-96">
      <Info className="h-4 w-4" />
      <AlertDescription>
        This alert doesn't have a title, just a description.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert className="w-96">
      <AlertTitle>No Icon Alert</AlertTitle>
      <AlertDescription>
        This alert doesn't have an icon, just text content.
      </AlertDescription>
    </Alert>
  ),
};

export const AlertVariations: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          Here's some helpful information for you.
        </AlertDescription>
      </Alert>
      
      <Alert className="border-green-200 text-green-800 dark:border-green-900/50 dark:text-green-400">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Operation completed successfully.
        </AlertDescription>
      </Alert>
      
      <Alert className="border-yellow-200 text-yellow-800 dark:border-yellow-900/50 dark:text-yellow-400">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Please review before proceeding.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          An error occurred while processing.
        </AlertDescription>
      </Alert>
    </div>
  ),
};