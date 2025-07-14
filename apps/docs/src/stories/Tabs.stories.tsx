import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Label,
} from '@design-system/core';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Tabs> = {
  title: 'Core/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default active tab value',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs className='w-[400px]' defaultValue='account'>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label className='text-sm font-medium' htmlFor='name'>
                Name
              </Label>
              <Input defaultValue='John Doe' id='name' />
            </div>
            <div className='space-y-1'>
              <Label className='text-sm font-medium' htmlFor='username'>
                Username
              </Label>
              <Input defaultValue='@johndoe' id='username' />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='password'>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label className='text-sm font-medium' htmlFor='current'>
                Current password
              </Label>
              <Input id='current' type='password' />
            </div>
            <div className='space-y-1'>
              <Label className='text-sm font-medium' htmlFor='new'>
                New password
              </Label>
              <Input id='new' type='password' />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const WithMultipleTabs: Story = {
  render: () => (
    <Tabs className='w-[600px]' defaultValue='overview'>
      <TabsList>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='analytics'>Analytics</TabsTrigger>
        <TabsTrigger value='reports'>Reports</TabsTrigger>
        <TabsTrigger value='notifications'>Notifications</TabsTrigger>
      </TabsList>
      <TabsContent className='space-y-4' value='overview'>
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Welcome to your dashboard overview. Here you can see a summary of
              your account activity.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent className='space-y-4' value='analytics'>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              View detailed analytics and metrics about your account
              performance.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent className='space-y-4' value='reports'>
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Generate and download comprehensive reports for your data.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent className='space-y-4' value='notifications'>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your notification preferences and settings.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: () => (
    <Tabs className='w-[400px]' defaultValue='general'>
      <TabsList>
        <TabsTrigger value='general'>General</TabsTrigger>
        <TabsTrigger value='security'>Security</TabsTrigger>
        <TabsTrigger disabled value='billing'>
          Billing
        </TabsTrigger>
      </TabsList>
      <TabsContent value='general'>
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Configure your general account settings.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='security'>
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Manage your security preferences and two-factor authentication.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='billing'>
        <Card>
          <CardHeader>
            <CardTitle>Billing</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This tab is disabled and cannot be accessed.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const VerticalTabs: Story = {
  render: () => (
    <Tabs
      className='w-[600px] flex space-x-4'
      defaultValue='profile'
      orientation='vertical'
    >
      <TabsList className='flex-col h-auto w-48'>
        <TabsTrigger className='w-full justify-start' value='profile'>
          Profile
        </TabsTrigger>
        <TabsTrigger className='w-full justify-start' value='account'>
          Account
        </TabsTrigger>
        <TabsTrigger className='w-full justify-start' value='appearance'>
          Appearance
        </TabsTrigger>
        <TabsTrigger className='w-full justify-start' value='notifications'>
          Notifications
        </TabsTrigger>
      </TabsList>
      <div className='flex-1'>
        <TabsContent value='profile'>
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                Manage your profile information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Update your profile details and preferences.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='account'>
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Manage your account settings.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Configure your account settings and preferences.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='appearance'>
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the appearance of your interface.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Choose your theme and display preferences.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='notifications'>
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Configure your notification settings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Manage how and when you receive notifications.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const SimpleContent: Story = {
  render: () => (
    <Tabs className='w-[400px]' defaultValue='tab1'>
      <TabsList>
        <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent className='mt-4' value='tab1'>
        <div className='p-4 border rounded-lg'>
          <h3 className='font-medium mb-2'>Content for Tab 1</h3>
          <p className='text-sm text-muted-foreground'>
            This is the content for the first tab without using cards.
          </p>
        </div>
      </TabsContent>
      <TabsContent className='mt-4' value='tab2'>
        <div className='p-4 border rounded-lg'>
          <h3 className='font-medium mb-2'>Content for Tab 2</h3>
          <p className='text-sm text-muted-foreground'>
            This is the content for the second tab.
          </p>
        </div>
      </TabsContent>
      <TabsContent className='mt-4' value='tab3'>
        <div className='p-4 border rounded-lg'>
          <h3 className='font-medium mb-2'>Content for Tab 3</h3>
          <p className='text-sm text-muted-foreground'>
            This is the content for the third tab.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Tabs className='w-[500px]' defaultValue='personal'>
      <TabsList>
        <TabsTrigger value='personal'>Personal Info</TabsTrigger>
        <TabsTrigger value='contact'>Contact</TabsTrigger>
        <TabsTrigger value='preferences'>Preferences</TabsTrigger>
      </TabsList>
      <TabsContent className='space-y-4' value='personal'>
        <div className='space-y-2'>
          <Label className='text-sm font-medium' htmlFor='firstName'>
            First Name
          </Label>
          <Input id='firstName' placeholder='Enter your first name' />
        </div>
        <div className='space-y-2'>
          <Label className='text-sm font-medium' htmlFor='lastName'>
            Last Name
          </Label>
          <Input id='lastName' placeholder='Enter your last name' />
        </div>
        <Button>Save Personal Info</Button>
      </TabsContent>
      <TabsContent className='space-y-4' value='contact'>
        <div className='space-y-2'>
          <Label className='text-sm font-medium' htmlFor='email'>
            Email
          </Label>
          <Input id='email' placeholder='Enter your email' type='email' />
        </div>
        <div className='space-y-2'>
          <Label className='text-sm font-medium' htmlFor='phone'>
            Phone
          </Label>
          <Input id='phone' placeholder='Enter your phone number' type='tel' />
        </div>
        <Button>Save Contact Info</Button>
      </TabsContent>
      <TabsContent className='space-y-4' value='preferences'>
        <div className='space-y-2'>
          <Label className='text-sm font-medium' htmlFor='emailNotifications'>
            Email Notifications
          </Label>
          <div className='flex items-center space-x-2'>
            <input id='emailNotifications' type='checkbox' />
            <Label className='text-sm' htmlFor='emailNotifications'>
              Receive email notifications
            </Label>
          </div>
        </div>
        <Button>Save Preferences</Button>
      </TabsContent>
    </Tabs>
  ),
};
