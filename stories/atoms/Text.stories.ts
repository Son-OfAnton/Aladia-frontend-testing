import type { StoryFn, Meta } from '@storybook/vue3';
import Text from '../../components/atoms/Text.vue';

interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  class?: string;
}

export default {
  title: 'Components/Atoms/Text',
  component: Text,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the text',
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight of the text',
    },
    class: {
      control: 'text',
      description: 'Additional custom classes for styling',
    },
  },
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args) => ({
  components: { Text },
  setup() {
    return { args };
  },
  template: '<Text v-bind="args">Sample Text</Text>',
});

export const SmallLight = Template.bind({});
SmallLight.args = {
  size: 'sm',
  weight: 'light',
};

export const SmallNormal = Template.bind({});
SmallNormal.args = {
  size: 'sm',
  weight: 'normal',
};

export const SmallMedium = Template.bind({});
SmallMedium.args = {
  size: 'sm',
  weight: 'medium',
};

export const SmallSemibold = Template.bind({});
SmallSemibold.args = {
  size: 'sm',
  weight: 'semibold',
};

export const SmallBold = Template.bind({});
SmallBold.args = {
  size: 'sm',
  weight: 'bold',
};

export const MediumLight = Template.bind({});
MediumLight.args = {
  size: 'md',
  weight: 'light',
};

export const MediumNormal = Template.bind({});
MediumNormal.args = {
  size: 'md',
  weight: 'normal',
};

export const MediumMedium = Template.bind({});
MediumMedium.args = {
  size: 'md',
  weight: 'medium',
};

export const MediumSemibold = Template.bind({});
MediumSemibold.args = {
  size: 'md',
  weight: 'semibold',
};

export const MediumBold = Template.bind({});
MediumBold.args = {
  size: 'md',
  weight: 'bold',
};

export const LargeLight = Template.bind({});
LargeLight.args = {
  size: 'lg',
  weight: 'light',
};

export const LargeNormal = Template.bind({});
LargeNormal.args = {
  size: 'lg',
  weight: 'normal',
};

export const LargeMedium = Template.bind({});
LargeMedium.args = {
  size: 'lg',
  weight: 'medium',
};

export const LargeSemibold = Template.bind({});
LargeSemibold.args = {
  size: 'lg',
  weight: 'semibold',
};

export const LargeBold = Template.bind({});
LargeBold.args = {
  size: 'lg',
  weight: 'bold',
};

export const CustomClassText = Template.bind({});
CustomClassText.args = {
  size: 'md',
  weight: 'medium',
  class: 'text-red-500',
};
