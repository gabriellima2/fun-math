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
	const handleOpenMock = jest.fn();
	const handleCloseMock = jest.fn();

	beforeEach(() => {
		render(
			<>
				<OpenSidebarButton onClick={handleOpenMock} />
				<CloseSidebarButton onClick={handleCloseMock} />
			</>
		);
	});

	describe("Render", () => {
		describe("Open Button", () => {
			it("should render", () => {
				expect(getOpenButton()).toBeInTheDocument();
			});
		});

		describe("Close Button", () => {
			it("should render", () => {
				expect(getCloseButton()).toBeInTheDocument();
			});
		});
	});

	describe("Interactions", () => {
		describe("Open Button", () => {
			it("should call open function when clicked", async () => {
				await userEvent.click(getOpenButton());

				expect(handleOpenMock).toBeCalled();
			});
		});

		describe("Close Button", () => {
			it("should call close function when clicked", async () => {
				await userEvent.click(getCloseButton());

				expect(handleCloseMock).toBeCalled();
			});
		});
	});
});
