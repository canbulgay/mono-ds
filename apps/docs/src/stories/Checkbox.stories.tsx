import { Checkbox, Label } from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Core/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    defaultChecked: {
      control: 'boolean', 
      description: 'Default checked state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Checkbox id="default" />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="with-label" />
      <Label htmlFor="with-label">Accept terms and conditions</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Checked by default</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled checkbox</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Disabled and checked</Label>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <h3 className="text-lg font-medium">Select your preferences</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="marketing" />
          <Label htmlFor="marketing">
            I want to receive marketing emails
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletters" defaultChecked />
          <Label htmlFor="newsletters">
            I want to receive newsletters
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="notifications" />
          <Label htmlFor="notifications">
            I want to receive push notifications
          </Label>
        </div>
      </div>
    </div>
  ),
};