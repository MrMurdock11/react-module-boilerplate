declare namespace ButtonStyleCssNamespace {
	export interface IButtonStyleCss {
		button: string;
		danger: string;
		default: string;
		fluid: string;
		large: string;
		medium: string;
		primary: string;
		secondary: string;
		small: string;
		uppercase: string;
	}
}

declare const ButtonStyleCssModule: ButtonStyleCssNamespace.IButtonStyleCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: ButtonStyleCssNamespace.IButtonStyleCss;
};

export = ButtonStyleCssModule;
