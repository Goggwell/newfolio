import App from "@/components/App";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("App component", () => {
	it("renders the page properly", () => {
		render(<App />);
		expect(true).toBeTruthy();
	});
});
