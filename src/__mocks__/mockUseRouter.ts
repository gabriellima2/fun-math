import { NextRouter, useRouter } from "next/router";

type MockUseRouterParams = Partial<NextRouter>;

interface MockUseRouter extends Omit<MockUseRouterParams, "query"> {
	query: {};
}

jest.mock("next/router", () => ({
	useRouter: jest.fn(),
}));

export function mockUseRouter(options: MockUseRouter) {
	useRouter.mockImplementation(() => ({
		...options,
	}));
}
