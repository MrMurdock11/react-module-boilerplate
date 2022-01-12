import React from "react";
import { ButtonView } from "./Button.view";

export type ButtonState = {
	/**
	 * Текст внутри кнопки.
	 *
	 * @type {string}
	 */
	label: string;

	/**
	 * Тип кнопки.
	 *
	 * @type {"primary" | "secondary" | "danger" | "default"}
	 */
	type?: "primary" | "secondary" | "danger" | "default";

	/**
	 * Размер кнопки.
	 *
	 * @type {"small" | "medium" | "large"}
	 */
	size?: "small" | "medium" | "large";

	/**
	 * Значение проказывающее, что кнопка недоступна.
	 *
	 * @type {boolean}
	 */
	disabled?: boolean;

	/**
	 * Значение показывающее, что текст в кнопке
	 * будет написан заглавными буквами.
	 *
	 * @type {boolean}
	 */
	uppercase?: boolean;

	/**
	 * Значение показывающее, что кнопка будет заполнять
	 * всю ширину родительского блока.
	 *
	 * @type {boolean}
	 */
	fluid?: boolean;

	/**
	 * Обработчик события нажатия на кнопку.
	 *
	 * @type {React.MouseEventHandler}
	 */
	onClick?: React.MouseEventHandler;
};

export type ButtonProps = ButtonState;

export const Button: React.FC<ButtonProps> = props => {
	return <ButtonView {...props} />;
};

Button.defaultProps = {
	label: "Button",
	type: "default",
	size: "medium",
	disabled: false,
	uppercase: false,
	onClick: null,
};
