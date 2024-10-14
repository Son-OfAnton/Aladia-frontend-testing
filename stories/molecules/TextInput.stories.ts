import type { StoryFn, Meta } from '@storybook/vue3';
import TextField from '../../components/molecules/TextInput.vue';

interface TextFieldProps {
  placeholder?: string;
  label?: string;
  modelValue?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  class?: string;
  id?: string;
  leading?: string;
  trailing?: string;
  type?: string;
}

export default {
  title: 'Components/Molecules/TextField',
  component: TextField,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the input field',
    },
    leading: {
      control: 'text',
      description: 'Icon on the left side of the input',
    },
    trailing: {
      control: 'text',
      description: 'Icon on the right side of the input',
    },
    type: {
      control: 'text',
      description: 'Input type (e.g. text, password, email)',
    },
    class: {
      control: 'text',
      description: 'Additional classes for styling the input field',
    },
  },
} as Meta<TextFieldProps>;

const Template: StoryFn<TextFieldProps> = (args) => ({
  components: { TextField },
  setup() {
    return { args };
  },
  template: '<TextField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  label: 'Default TextField',
  size: 'md',
  type: 'text',
};

export const Small = Template.bind({});
Small.args = {
  placeholder: 'Enter text...',
  label: 'Small TextField',
  size: 'sm',
  type: 'text',
};

export const Large = Template.bind({});
Large.args = {
  placeholder: 'Enter text...',
  label: 'Large TextField',
  size: 'lg',
  type: 'text',
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  placeholder: 'Enter text...',
  label: 'TextField with Leading Icon',
  size: 'md',
  leading: 'fa-solid fa-search',
  type: 'text',
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  placeholder: 'Enter text...',
  label: 'TextField with Trailing Icon',
  size: 'md',
  trailing: 'fa-solid fa-eye',
  type: 'text',
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  placeholder: 'Enter text...',
  label: 'TextField with Leading and Trailing Icons',
  size: 'md',
  leading: 'fa-solid fa-search',
  trailing: 'fa-solid fa-eye',
  type: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input',
  label: 'Disabled TextField',
  size: 'md',
  disabled: true,
  type: 'text',
};

export const WithNoLabel = Template.bind({});
WithNoLabel.args = {
  placeholder: 'Enter text...',
  size: 'md',
  type: 'text',
};