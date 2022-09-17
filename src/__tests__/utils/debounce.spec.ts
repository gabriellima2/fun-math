import "@testing-library/jest-dom";
import { act } from "@testing-library/react";

import { debounce } from "../../utils/debounce";

async function wait(timerMS: number): Promise<void> {
	await act(async () => {
		await new Promise((r) => setTimeout(r, timerMS));
	});
}

describe("Debounce function", () => {
	const TIME_MS = 100;
	const CALLBACK = jest.fn();

	it(`should call the function after ${TIME_MS} milliseconds`, async () => {
		debounce(CALLBACK, TIME_MS);

		await wait(TIME_MS);
		expect(CALLBACK).toBeCalled();
	});
});
