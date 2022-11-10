import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CloseSidebarButton, OpenSidebarButton } from "./SidebarButton";

const TITLE_OPEN_BUTTON = /Abrir Menu de Navegação/;
const TITLE_CLOSE_BUTTON = /Fechar Menu de Navegação/;

function getOpenButton() {
	return screen.getByTitle(TITLE_OPEN_BUTTON);
}

function getCloseButton() {
	return screen.getByTitle(TITLE_CLOSE_BUTTON);
}

describe("Sidebar Buttons Component", () => {
	describe("Open Button", () => {
		const handleOpenMock = jest.fn();

		beforeEach(() => {
			render(<OpenSidebarButton onClick={handleOpenMock} />);
		});

		it("should render", () => {
			expect(getOpenButton()).toBeInTheDocument();
		});

		it("should call open function when clicked", async () => {
			await userEvent.click(getOpenButton());

			expect(handleOpenMock).toBeCalled();
		});
	});

	describe("Open Button", () => {
		const handleCloseMock = jest.fn();

		beforeEach(() => {
			render(<CloseSidebarButton onClick={handleCloseMock} />);
		});

		it("should render", () => {
			expect(getCloseButton()).toBeInTheDocument();
		});

		it("should call close function when clicked", async () => {
			await userEvent.click(getCloseButton());

			expect(handleCloseMock).toBeCalled();
		});
	});
});
