import type { StoryFn, Meta } from '@storybook/vue3';
import Image from '../../components/atoms/Image.vue';

interface ImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

export default {
  title: 'Components/Atoms/Image',
  component: Image,
  argTypes: {
    src: {
      control: 'text',
      description: 'The source URL of the image',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the image',
    },
    class: {
      control: 'text',
      description: 'Additional custom classes for styling',
    },
  },
} as Meta<ImageProps>;

const Template: StoryFn<ImageProps> = (args) => ({
  components: { Image },
  setup() {
    return { args };
  },
  template: '<Image v-bind="args" />',
});

export const Small = Template.bind({});
Small.args = {
  src: 'https://picsum.photos/200',
  alt: 'Placeholder image',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  src: 'https://picsum.photos/200',
  alt: 'Placeholder image',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  src: 'https://picsum.photos/200',
  alt: 'Placeholder image',
  size: 'lg',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  src: 'https://picsum.photos/200',
  alt: 'Placeholder image',
  size: 'md',
  class: 'rounded-full border border-gray-300',
};
