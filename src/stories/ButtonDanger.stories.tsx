import React from "react";
import { Story, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";
import { ButtonProps } from "../components/Button/Button";

export default {
	title: "Button/Danger",
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

export const Danger = bindTemplate();
Danger.args = {
	label: "Danger",
	type: "danger",
};

export const DangerUppercase = bindTemplate();
DangerUppercase.args = {
	label: "Danger",
	type: "danger",
	uppercase: true,
};

export const DangerFluid = bindTemplate();
DangerFluid.args = {
	label: "Danger",
	type: "danger",
	fluid: true,
};

export const DangerDisabled = bindTemplate();
DangerDisabled.args = {
	label: "Danger",
	type: "danger",
	disabled: true,
};
