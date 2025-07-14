import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react';

type AccordionProps = React.ComponentProps<typeof Accordion>;

const meta: Meta<typeof Accordion> = {
  title: 'Core/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether multiple items can be opened at once',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether items can be collapsed when type is single',
    },
  },
};

export default meta;
type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  render: () => (
    <Accordion collapsible className='w-96' type='single'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>What is this component?</AccordionTrigger>
        <AccordionContent>
          This is an accordion component built with Radix UI primitives and
          styled with Tailwind CSS.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>How do I use it?</AccordionTrigger>
        <AccordionContent>
          Import the accordion components and compose them together to create
          collapsible content sections.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes! Built on Radix UI primitives, it follows WAI-ARIA design patterns
          and provides keyboard navigation support.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion className='w-96' type='multiple'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Feature 1</AccordionTrigger>
        <AccordionContent>
          This accordion allows multiple items to be open at the same time. You
          can expand several sections simultaneously.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Feature 2</AccordionTrigger>
        <AccordionContent>
          Each item can be toggled independently of the others. This is useful
          for complex forms or detailed information displays.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Feature 3</AccordionTrigger>
        <AccordionContent>
          The multiple type gives users more control over what content they want
          to see at any given time.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <Accordion collapsible className='w-96' type='single'>
      <AccordionItem value='faq-1'>
        <AccordionTrigger>How do I reset my password?</AccordionTrigger>
        <AccordionContent>
          You can reset your password by clicking the &quot;Forgot
          Password&quot; link on the login page. Enter your email address and
          we&quot;ll send you a reset link.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='faq-2'>
        <AccordionTrigger>How do I contact support?</AccordionTrigger>
        <AccordionContent>
          You can contact our support team through the help center, by email at
          support@example.com, or through the live chat feature in the app.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='faq-3'>
        <AccordionTrigger>Is my data secure?</AccordionTrigger>
        <AccordionContent>
          Yes, we take data security very seriously. We use industry-standard
          encryption and security measures to protect your information.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='faq-4'>
        <AccordionTrigger>Can I cancel my subscription?</AccordionTrigger>
        <AccordionContent>
          Yes, you can cancel your subscription at any time from your account
          settings. Your access will continue until the end of your current
          billing period.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDefaultOpen: Story = {
  render: () => (
    <Accordion collapsible className='w-96' defaultValue='item-1' type='single'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>This item starts open</AccordionTrigger>
        <AccordionContent>
          This accordion item is open by default when the component is first
          rendered. This can be useful for highlighting important information.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>This item starts closed</AccordionTrigger>
        <AccordionContent>
          This item is closed by default and can be opened by clicking the
          trigger.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
