import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from '@storybook/addon-actions'
import { AutoComplete, AutoCompleteProps } from "./autoComplete";

export default {
  title: "Example/AutoComplete",
  component: AutoComplete,
} as Meta;

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete {...args} />;
const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      console.log(items);
      return items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }));
    });
};
export const Primary = Template.bind({});
Primary.args = {
  fetchSuggestions: handleFetch,
  onSelect:action('selected')
};
