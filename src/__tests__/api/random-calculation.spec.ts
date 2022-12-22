import type { RequestOptions, ResponseOptions } from "node-mocks-http";

import handler from "@pages/api/exercises/random-calculation/[operator]";
import { STATUS_CODE } from "@mocks-test/status-code";
import { mockFetch } from "@mocks-test/mock-fetch";

import type {
	RandomCalculationRequestParams,
	RandomCalculationResponse,
} from "@protocols/random-calculation-protocols";

async function randomCalculationFetch(
	reqOptions?: RequestOptions,
	resOptions?: ResponseOptions
) {
	return mockFetch<RandomCalculationRequestParams, RandomCalculationResponse>(
		handler,
		reqOptions,
		resOptions
	);
}

describe("API Random Calculation", () => {
	describe("/GET random-calculation", () => {
		const validDataModel = {
			data: {
				text: expect.any(String),
				result: expect.any(Number),
			},
		};
		const invalidDataModel = {
			data: null,
			message: expect.any(String),
		};

		describe("Status Code 200", () => {
			it("should return the calculation for the 'addition' operator", async () => {
				const { response } = await randomCalculationFetch({
					method: "GET",
					query: {
						operator: "addition",
					},
				});

				expect(response._getStatusCode()).toBe(STATUS_CODE.OK);
				expect(JSON.parse(response._getData())).toEqual(
					expect.objectContaining(validDataModel)
				);
			});

			it("should return the calculation for the 'subtraction' operator", async () => {
				const { response } = await randomCalculationFetch({
					method: "GET",
					query: {
						operator: "subtraction",
					},
				});

				expect(response._getStatusCode()).toBe(STATUS_CODE.OK);
				expect(JSON.parse(response._getData())).toEqual(
					expect.objectContaining(validDataModel)
				);
			});

			it("should return the calculation for the 'multiply' operator", async () => {
				const { response } = await randomCalculationFetch({
					method: "GET",
					query: {
						operator: "multiply",
					},
				});

				expect(response._getStatusCode()).toBe(STATUS_CODE.OK);
				expect(JSON.parse(response._getData())).toEqual(
					expect.objectContaining(validDataModel)
				);
			});

			it("should return the calculation for the 'division' operator", async () => {
				const { response } = await randomCalculationFetch({
					method: "GET",
					query: {
						operator: "division",
					},
				});

				expect(response._getStatusCode()).toBe(STATUS_CODE.OK);
				expect(JSON.parse(response._getData())).toEqual(
					expect.objectContaining(validDataModel)
				);
			});
		});

		describe("Status Code 500", () => {
			it("should throw error if passed invalid operator", async () => {
				const { response } = await randomCalculationFetch({
					method: "GET",
					query: { operator: "non-existent_operator" },
				});

				expect(response._getStatusCode()).toBe(STATUS_CODE.SERVER_ERROR);
				expect(JSON.parse(response._getData())).toEqual(
					expect.objectContaining(invalidDataModel)
				);
			});

			it("should throw error if passed invalid operator type", async () => {
				const { response } = await randomCalculationFetch({
					method: "GET",
					query: { operator: false },
				});

				expect(response._getStatusCode()).toBe(STATUS_CODE.SERVER_ERROR);
				expect(JSON.parse(response._getData())).toEqual(
					expect.objectContaining(invalidDataModel)
				);
			});
		});
	});

	describe("/Others Methods", () => {
		it("should return 405 Status Code to different methods of GET", async () => {
			const { response } = await randomCalculationFetch({
				method: "POST",
			});

			expect(response._getStatusCode()).toBe(STATUS_CODE.NOT_ALLOWED_METHOD);
		});
	});
});
