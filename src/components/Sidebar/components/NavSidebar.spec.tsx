import "@testing-library/jest-dom";

import { BsApp } from "react-icons/bs";
import { render, screen } from "@testing-library/react";

import { NavSidebar } from "./NavSidebar";
import type { ILink } from "@mocks/links";

const FIRST_TEXT = "First";
const SECOND_TEXT = "Second";

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

describe("Nav Sidebar Component", () => {
	const linksMock: ILink[] = [
		{ id: 1, name: FIRST_TEXT, href: "/", icon: BsApp },
		{ id: 2, name: SECOND_TEXT, href: "/fazer-exercicios", icon: BsApp },
	];
	const closeSidebarMock = jest.fn();

	beforeEach(() => {
		render(<NavSidebar links={linksMock} closeSidebar={closeSidebarMock} />);
	});

	describe("Render", () => {
		it("should render", () => {
			expect(screen.getByText(FIRST_TEXT)).toBeInTheDocument();
		});
	});

	describe("Accessibility", () => {
		it("should be prevent focus if on current route", async () => {
			expect(screen.getByText(FIRST_TEXT)).toHaveAttribute(
				"aria-disabled",
				"true"
			);
			expect(screen.getByText(FIRST_TEXT)).toHaveAttribute("tabindex", "-1");
		});

		it("should be default behavior if not on current route", async () => {
			expect(screen.getByText(SECOND_TEXT)).toHaveAttribute(
				"aria-disabled",
				"false"
			);
			expect(screen.getByText(SECOND_TEXT)).toHaveAttribute("tabindex", "0");
		});
	});
});
