import React from "react";
import { Story, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";
import { ButtonProps } from "../components/Button/Button";

export default {
	title: "Button/Primary",
	component: Button,
	argTypes: {
		type: {
			options: ["primary", "secondary", "danger", "default"],
			defaultValue: "default",
		},
		size: {
			options: ["small", "medium", "large"],
			defaultValue: "medium",
		},
		label: { control: { type: "text" } },
		disabled: { control: { type: "boolean" }, defaultValue: false },
		uppercase: { control: { type: "boolean" }, defaultValue: false },
		fluid: { control: { type: "boolean" }, defaultValue: false },
		onClick: { control: false },
	},
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = props => <Button {...props} />;

const bindTemplate = (): { args: ButtonProps } => Template.bind({});

export const Primary = bindTemplate();
Primary.args = {
	label: "Primary",
	type: "primary",
};

export const PrimaryUppercase = bindTemplate();
PrimaryUppercase.args = {
	label: "Primary",
	type: "primary",
	uppercase: true,
};

export const PrimaryFluid = bindTemplate();
PrimaryFluid.args = {
	label: "Primary",
	type: "primary",
	fluid: true,
};

export const PrimaryDisabled = bindTemplate();
PrimaryDisabled.args = {
	label: "Primary",
	type: "primary",
	disabled: true,
};
