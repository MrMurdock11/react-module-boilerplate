import React from "react";
import { Story, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";
import { ButtonProps } from "../components/Button/Button";

export default {
	title: "Button/Secondary",
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
	parameters: {
		backgrounds: {
			default: "cloud",
			values: [
				{
					name: "cloud",
					value: "#F6F6F6",
				},
			],
		},
	},
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = props => <Button {...props} />;

const bindTemplate = (): { args: ButtonProps } => Template.bind({});

export const Secondary = bindTemplate();
Secondary.args = {
	label: "Secondary",
	type: "secondary",
};

export const SecondaryUppercase = bindTemplate();
SecondaryUppercase.args = {
	label: "Secondary",
	type: "secondary",
	uppercase: true,
};

export const SecondaryFluid = bindTemplate();
SecondaryFluid.args = {
	label: "Secondary",
	type: "secondary",
	fluid: true,
};

export const SecondaryDisabled = bindTemplate();
SecondaryDisabled.args = {
	label: "Secondary",
	type: "secondary",
	disabled: true,
};
