import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {AutoComplete, AutoCompleteProps } from './autoComplete';

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
} as Meta;

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete {...args} />;
const lakers = [
    "bradley",
    "pope",
    "caruso",
    "cook",
    "cousins",
    "james",
    "AD",
    "green",
    "howard",
    "kuzma",
    "McGee",
    "rando",
  ];
  const filterChange = (val: string) => {
    return lakers.filter((item) => item.includes(val));
  };
export const Primary = Template.bind({});
Primary.args = {
    filterChange,
    onSelect:(str)=>{console.log(str)}
};
