import styles from "./Button.style.css";

import React from "react";
import { ButtonProps } from "./Button";

export const ButtonView: React.FC<ButtonProps> = props => {
	const { label, size, type, disabled, uppercase, fluid, onClick } = props;

	return (
		<button
			className={`${styles.button} ${styles[type]} ${styles[size]} ${
				uppercase ? styles.uppercase : ""
			} ${fluid ? styles.fluid : ""}`}
			disabled={disabled}
			onClick={onClick}
			role="button"
		>
			{label}
		</button>
	);
};
