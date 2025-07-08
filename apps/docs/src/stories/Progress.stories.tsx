import { Progress } from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Progress> = {
  title: 'Core/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The progress value from 0 to 100',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    className: 'w-60',
  },
};

export const Empty: Story = {
  render: () => <Progress value={0} className="w-60" />,
};

export const Quarter: Story = {
  render: () => <Progress value={25} className="w-60" />,
};

export const Half: Story = {
  render: () => <Progress value={50} className="w-60" />,
};

export const ThreeQuarters: Story = {
  render: () => <Progress value={75} className="w-60" />,
};

export const Complete: Story = {
  render: () => <Progress value={100} className="w-60" />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-60 space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>45%</span>
      </div>
      <Progress value={45} />
    </div>
  ),
};

export const MultipleProgress: Story = {
  render: () => (
    <div className="w-60 space-y-4">
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>HTML</span>
          <span>90%</span>
        </div>
        <Progress value={90} />
      </div>
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>CSS</span>
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>JavaScript</span>
          <span>60%</span>
        </div>
        <Progress value={60} />
      </div>
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>React</span>
          <span>45%</span>
        </div>
        <Progress value={45} />
      </div>
    </div>
  ),
};