import React from "react";
import { Story, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";
import { ButtonProps } from "../components/Button/Button";

export default {
	title: "Button/Default",
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

export const Default = bindTemplate();
Default.args = {
	label: "Default",
	type: "default",
};

export const DefaultUppercase = bindTemplate();
DefaultUppercase.args = {
	label: "Default",
	type: "default",
	uppercase: true,
};

export const DefaultFluid = bindTemplate();
DefaultFluid.args = {
	label: "Default",
	type: "default",
	fluid: true,
};

export const DefaultDisabled = bindTemplate();
DefaultDisabled.args = {
	label: "Default",
	type: "default",
	disabled: true,
};
