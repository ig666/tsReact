import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {Input, InputProps } from './input';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
  size:'lg',
  icon:'address-card',
  prepend:<div>你猜猜</div>
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm'
};
