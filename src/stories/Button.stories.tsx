import type { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from '../components/atoms/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args}>Button</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});

export const Large = Template.bind({});

export const Small = Template.bind({});
