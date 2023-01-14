import { clearMessage, setMessage } from "@redux/modules/tip-module/actions";
import { setupStore } from "@redux/store";
import { screen } from "@testing-library/dom";

import { Tip } from "./Tip";
import { renderWithProviders } from "@utils/render-with-providers";
import { act } from "@testing-library/react";

const TIP_MESSAGE = "Hello World!";

function renderTipComponent(message: string | null) {
	renderWithProviders(
		<>
			<Tip.ButtonContent />
			<Tip.Content />
		</>,
		{ preloadedState: { tip: { message } } }
	);
}

describe("Tip Component", () => {
	describe("Render", () => {
		const store = setupStore();

		it("should render correctly without preloaded message", () => {
			renderTipComponent(null);
			expect(screen.getByText("Dica")).toBeInTheDocument();
			expect(screen.queryByText(TIP_MESSAGE)).not.toBeInTheDocument();
		});
		it("should render correctly with preloaded message", () => {
			renderTipComponent(TIP_MESSAGE);
			expect(screen.getByText("Dica")).toBeInTheDocument();
			expect(screen.getByText(TIP_MESSAGE)).toBeInTheDocument();
		});
		it("should render correctly using 'setMessage' function", () => {
			act(() => {
				store.dispatch(setMessage({ message: TIP_MESSAGE }));
			});
			const { getByText } = renderWithProviders(<Tip.Content />, { store });

			expect(getByText(TIP_MESSAGE)).toBeInTheDocument();
		});
		it("should render correctly using 'clearMessage' function", () => {
			act(() => {
				store.dispatch(setMessage({ message: TIP_MESSAGE }));
			});
			const { getByText } = renderWithProviders(<Tip.Content />, { store });
			expect(getByText(TIP_MESSAGE)).toBeInTheDocument();

			act(() => {
				store.dispatch(clearMessage());
			});
			const { queryByText } = renderWithProviders(<Tip.Content />, { store });
			expect(queryByText(TIP_MESSAGE)).not.toBeInTheDocument();
		});
	});
});
