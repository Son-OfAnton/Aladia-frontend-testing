import type { StoryFn, Meta } from '@storybook/vue3';
import Container from '../../components/organisms/Container.vue'; 
import Image from '../../components/atoms/Image.vue';

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  class?: string;
}

export default {
  title: 'Components/Organisms/Container',
  component: Container,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the container',
    },
    class: {
      control: 'text',
      description: 'Additional classes for styling the container',
    },
  },
} as Meta<ContainerProps>;

const Template: StoryFn<ContainerProps> = (args) => ({
  components: { Container },
  setup() {
    return { args };
  },
  template: `
    <Container v-bind="args">
      <div class="bg-gray-300 text-center py-10">Content goes here</div>
    </Container>
  `,
});

export const Default = Template.bind({});
Default.args = {
  size: 'lg',
  class: '',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  class: '',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  class: '',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  class: '',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
  class: '',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  size: 'lg',
  class: 'bg-blue-500 rounded-lg p-5',
};

export const WithChildComponent = (args: any) => ({
  components: { Container, Image },
  setup() {
    return { args };
  },
  template: `
    <Container v-bind="args">
      <div class=flex flex-wrap gap-x-4 justify-center items-center>
        <Image src="https://picsum.photos/200" alt="Placeholder image" size="md" class="rounded-full border border-gray-300" />
        <Image src="https://picsum.photos/200" alt="Placeholder image" size="md" class="rounded-full border border-gray-300" />
        <Image src="https://picsum.photos/200" alt="Placeholder image" size="md" class="rounded-full border border-gray-300" />
      </div>
    </Container>
  `,
});

WithChildComponent.args = {
  size: 'md',
  class: 'bg-gray-300 rounded-lg p-5',
};
