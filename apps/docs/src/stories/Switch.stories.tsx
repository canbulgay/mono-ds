import { Switch, Label } from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  title: 'Core/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
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
  render: () => <Switch id="default" />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="with-label" />
      <Label htmlFor="with-label">Enable notifications</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="checked" defaultChecked />
      <Label htmlFor="checked">Enabled by default</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled" disabled />
        <Label htmlFor="disabled">Disabled switch</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Disabled and on</Label>
      </div>
    </div>
  ),
};

export const SettingsPanel: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <h3 className="text-lg font-medium">Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="notifications" className="font-medium">
              Push Notifications
            </Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications about updates
            </p>
          </div>
          <Switch id="notifications" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="dark-mode" className="font-medium">
              Dark Mode
            </Label>
            <p className="text-sm text-muted-foreground">
              Use dark theme across the app
            </p>
          </div>
          <Switch id="dark-mode" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="auto-save" className="font-medium">
              Auto Save
            </Label>
            <p className="text-sm text-muted-foreground">
              Automatically save your work
            </p>
          </div>
          <Switch id="auto-save" defaultChecked />
        </div>
      </div>
    </div>
  ),
};