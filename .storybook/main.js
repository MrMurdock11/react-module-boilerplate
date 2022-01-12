module.exports = {
	core: {
		builder: "webpack5",
	},
	webpackFinal: async config => {
		// ! Данная строчка кода избавляется от правила сборки
		// ! css стилей установленных по умолчанию при загрузке
		// ! пакета @storybook/webpack5.
		config.module.rules = config.module.rules.filter(
			rule => rule.test.toString() !== "/\\.css$/"
		);

		config.module.rules.push({
			test: /\.style.css$/,
			use: [
				"style-loader",
				"@teamsupercell/typings-for-css-modules-loader",
				{
					loader: "css-loader",
					options: {
						modules: {
							localIdentName: "[path]_[local]__[hash:base64:5]",
							exportLocalsConvention: "camelCaseOnly",
						},
					},
				},
			],
		});

		return config;
	},
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
