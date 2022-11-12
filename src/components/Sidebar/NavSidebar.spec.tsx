import "@testing-library/jest-dom";

import { BsApp } from "react-icons/bs";
import { render, screen } from "@testing-library/react";

import { NavSidebar } from "./NavSidebar";
import type { ILink } from "@interfaces/ILink";

const ANCHOR_TEXT = "Go to test";

jest.mock("next/router", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "/",
			query: "",
			asPath: "",
		};
	},
}));

function getAnchor() {
	return screen.getByText(ANCHOR_TEXT);
}

describe("Nav Sidebar Component", () => {
	const linksMock: ILink[] = [
		{ id: 1, name: ANCHOR_TEXT, href: "/", icon: BsApp },
	];
	const closeSidebarMock = jest.fn();

	beforeEach(() => {
		render(<NavSidebar links={linksMock} closeSidebar={closeSidebarMock} />);
	});

	it("should render", () => {
		expect(getAnchor()).toBeInTheDocument();
	});

	it("should be prevent focus if on current route", async () => {
		expect(getAnchor()).toHaveAttribute("aria-disabled", "true");
		expect(getAnchor()).toHaveAttribute("tabindex", "-1");
	});
});
