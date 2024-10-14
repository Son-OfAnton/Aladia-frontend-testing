import type { StoryFn, Meta } from '@storybook/vue3';
import Separator from '../../components/atoms/Separator.vue';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: 'thin' | 'medium' | 'thick';
  class?: string;
}

export default {
  title: 'Components/Atoms/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the separator',
    },
    thickness: {
      control: { type: 'select' },
      options: ['thin', 'medium', 'thick'],
      description: 'Thickness of the separator',
    },
    class: {
      control: 'text',
      description: 'Additional custom classes for styling',
    },
  },
} as Meta<SeparatorProps>;

const Template: StoryFn<SeparatorProps> = (args) => ({
  components: { Separator },
  setup() {
    return { args };
  },
  template: '<Separator v-bind="args" />',
});

export const HorizontalThin = Template.bind({});
HorizontalThin.args = {
  orientation: 'horizontal',
  thickness: 'thin',
};

export const HorizontalMedium = Template.bind({});
HorizontalMedium.args = {
  orientation: 'horizontal',
  thickness: 'medium',
};

export const VerticalThick = Template.bind({});
VerticalThick.args = {
  orientation: 'vertical',
  thickness: 'thick',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  orientation: 'horizontal',
  thickness: 'medium',
  class: 'bg-red-500',
};
