import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from ".";

test("Should display a default button", async () => {
	const { getByRole } = render(<Button label={"Button"} />);
	const element = getByRole("button");

	expect(element).toHaveTextContent("Button");
	// * Order is important
	expect(element.classList[0]).toBe("button");
	expect(element.classList[1]).toBe("default");
	expect(element.classList[2]).toBe("medium");
});
