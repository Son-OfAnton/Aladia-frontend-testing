import { type StoryFn } from "@storybook/vue3";
import Button from "../../components/atoms/Button.vue";
// import Icon from "../../components/atoms/Icon.vue";

interface ButtonArgs {
	variant?: "primary" | "outline" | "link" | "destructive";
	leading?: string;
	trailing?: string;
	disabled?: boolean;
	class?: string;
	default?: string;
}

export default {
	title: "Components/Atoms/Button",
	component: Button,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["primary", "outline", "link", "destructive"],
		},
		leading: { control: "text" },
		trailing: { control: "text" },
		disabled: { control: "boolean" },
	},
};

const Template: StoryFn<ButtonArgs> = (args: ButtonArgs) => ({
	components: { Button },
	setup() {
		return { args };
	},
	template: '<Button v-bind="args">{{ args.default }}</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
	variant: "primary",
	default: "Primary Button",
};

export const Outline = Template.bind({});
Outline.args = {
	variant: "outline",
	default: "Outline Button",
};

export const Link = Template.bind({});
Link.args = {
	variant: "link",
	default: "Link Button",
};

export const Destructive = Template.bind({});
Destructive.args = {
	variant: "destructive",
	default: "Destructive Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
	variant: "primary",
	disabled: true,
	default: "Disabled Button",
};
