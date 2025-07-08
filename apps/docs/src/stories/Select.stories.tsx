import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Select> = {
  title: 'Core/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default value of the select',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='blueberry'>Blueberry</SelectItem>
        <SelectItem value='grapes'>Grapes</SelectItem>
        <SelectItem value='pineapple'>Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <Select defaultValue='apple'>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='blueberry'>Blueberry</SelectItem>
        <SelectItem value='grapes'>Grapes</SelectItem>
        <SelectItem value='pineapple'>Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='blueberry'>Blueberry</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a timezone' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value='est'>Eastern Standard Time (EST)</SelectItem>
          <SelectItem value='cst'>Central Standard Time (CST)</SelectItem>
          <SelectItem value='mst'>Mountain Standard Time (MST)</SelectItem>
          <SelectItem value='pst'>Pacific Standard Time (PST)</SelectItem>
          <SelectItem value='akst'>Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value='hst'>Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value='gmt'>Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value='cet'>Central European Time (CET)</SelectItem>
          <SelectItem value='eet'>Eastern European Time (EET)</SelectItem>
          <SelectItem value='west'>
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value='cat'>Central Africa Time (CAT)</SelectItem>
          <SelectItem value='eat'>East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value='msk'>Moscow Time (MSK)</SelectItem>
          <SelectItem value='ist'>India Standard Time (IST)</SelectItem>
          <SelectItem value='cst_china'>China Standard Time (CST)</SelectItem>
          <SelectItem value='jst'>Japan Standard Time (JST)</SelectItem>
          <SelectItem value='kst'>Korea Standard Time (KST)</SelectItem>
          <SelectItem value='ist_indonesia'>
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value='awst'>
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem value='acst'>
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem value='aest'>
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem value='nzst'>New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value='fjt'>Fiji Time (FJT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='light'>Light</SelectItem>
        <SelectItem value='dark'>Dark</SelectItem>
        <SelectItem value='system'>System</SelectItem>
        <SelectItem value='high-contrast' disabled>
          High Contrast (Coming Soon)
        </SelectItem>
        <SelectItem value='custom' disabled>
          Custom (Pro Only)
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Select>
      <SelectTrigger className='w-[280px]'>
        <SelectValue placeholder='Select a programming language' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='javascript'>JavaScript</SelectItem>
        <SelectItem value='typescript'>TypeScript</SelectItem>
        <SelectItem value='python'>Python</SelectItem>
        <SelectItem value='java'>Java</SelectItem>
        <SelectItem value='csharp'>C#</SelectItem>
        <SelectItem value='cpp'>C++</SelectItem>
        <SelectItem value='go'>Go</SelectItem>
        <SelectItem value='rust'>Rust</SelectItem>
        <SelectItem value='php'>PHP</SelectItem>
        <SelectItem value='ruby'>Ruby</SelectItem>
        <SelectItem value='kotlin'>Kotlin</SelectItem>
        <SelectItem value='swift'>Swift</SelectItem>
        <SelectItem value='dart'>Dart</SelectItem>
        <SelectItem value='scala'>Scala</SelectItem>
        <SelectItem value='haskell'>Haskell</SelectItem>
        <SelectItem value='clojure'>Clojure</SelectItem>
        <SelectItem value='elixir'>Elixir</SelectItem>
        <SelectItem value='erlang'>Erlang</SelectItem>
        <SelectItem value='r'>R</SelectItem>
        <SelectItem value='matlab'>MATLAB</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className='space-y-4 w-80'>
      <div className='space-y-2'>
        <label className='text-sm font-medium'>Country</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Select your country' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='us'>United States</SelectItem>
            <SelectItem value='ca'>Canada</SelectItem>
            <SelectItem value='uk'>United Kingdom</SelectItem>
            <SelectItem value='de'>Germany</SelectItem>
            <SelectItem value='fr'>France</SelectItem>
            <SelectItem value='au'>Australia</SelectItem>
            <SelectItem value='jp'>Japan</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='space-y-2'>
        <label className='text-sm font-medium'>Language</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Select your language' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='en'>English</SelectItem>
            <SelectItem value='es'>Spanish</SelectItem>
            <SelectItem value='fr'>French</SelectItem>
            <SelectItem value='de'>German</SelectItem>
            <SelectItem value='it'>Italian</SelectItem>
            <SelectItem value='pt'>Portuguese</SelectItem>
            <SelectItem value='ru'>Russian</SelectItem>
            <SelectItem value='ja'>Japanese</SelectItem>
            <SelectItem value='ko'>Korean</SelectItem>
            <SelectItem value='zh'>Chinese</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};
