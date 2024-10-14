import { type StoryFn } from '@storybook/vue3';
import CheckboxInput from '../../components/atoms/CheckboxInput.vue';


interface CheckboxInputArgs {
  modelValue: boolean;
  required: boolean;
  size: 'sm' | 'md' | 'lg';
  label: string;
  id: string;
  class: string;
}

export default {
  title: 'Components/Atoms/CheckboxInput',
  component: CheckboxInput,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    required: { control: 'boolean' },
    label: { control: 'text' },
    modelValue: { control: 'boolean' },
  },
};

const Template: StoryFn<CheckboxInputArgs> = (args: CheckboxInputArgs) => ({
  components: { CheckboxInput },
  setup() {
    return { args };
  },
  template: '<CheckboxInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: false,
  required: false,
  size: 'md',
  id: 'checkbox1',
  class: '',
};
export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'lg',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: 'Accept terms and conditions',
};

