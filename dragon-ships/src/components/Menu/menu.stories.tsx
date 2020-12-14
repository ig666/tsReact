import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Menu, MenuProps } from "./menu";
import MenuItem from "./menuItem";

export default {
  title: "Example/Menu",
  component: Menu,
} as Meta;

const Template: Story<MenuProps> = (args) => (
  <Menu {...args}>
    <MenuItem>11</MenuItem>
    <MenuItem>22</MenuItem>
    <MenuItem>33</MenuItem>
  </Menu>
);

export const Primary = Template.bind({});
Primary.args = {
    defaultIndex:'2'
};
