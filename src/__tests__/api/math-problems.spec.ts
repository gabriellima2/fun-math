import type { RequestOptions, ResponseOptions } from "node-mocks-http";

import handler from "@pages/api/exercises/math-problems";
import { STATUS_CODE } from "@mocks-test/status-code";
import { mockFetch } from "@mocks-test/mock-fetch";

import type {
	MathProblemsResponse,
	MathProblemsRequest,
} from "@protocols/math-problems-protocols";

async function mathProblemsFetch(
	reqOptions?: RequestOptions,
	resOptions?: ResponseOptions
) {
	return mockFetch<MathProblemsRequest, MathProblemsResponse>(
		handler,
		reqOptions,
		resOptions
	);
}

describe("API Math Problems", () => {
	describe("/GET math-problems", () => {
		const validDataModel = {
			data: {
				text: expect.any(String),
				result: expect.any(Number),
				tip: expect.any(String),
			},
		};
		const invalidDataModel = {
			data: null,
			message: expect.any(String),
		};

		describe("Get first exercise", () => {
			describe("Status Code 200", () => {
				it("should GET a math-problem exercise", async () => {
					const { response } = await mathProblemsFetch({ method: "GET" });

					expect(response._getStatusCode()).toBe(STATUS_CODE.OK);
					expect(JSON.parse(response._getData())).toEqual(
						expect.objectContaining(validDataModel)
					);
				});
			});
		});

		describe("Get specific exercise", () => {
			describe("Status Code 200", () => {
				it("should GET a specific math-problem exercise", async () => {
					const { response } = await mathProblemsFetch({
						method: "GET",
						body: { position: 2 },
					});

					expect(response._getStatusCode()).toBe(STATUS_CODE.OK);
					expect(JSON.parse(response._getData())).toEqual(
						expect.objectContaining(validDataModel)
					);
				});
			});

			describe("Status Code 500", () => {
				it("should throw error if passed invalid parameter type", async () => {
					const { response } = await mathProblemsFetch({
						method: "GET",
						body: { position: "Hello" },
					});

					expect(response._getStatusCode()).toBe(STATUS_CODE.SERVER_ERROR);
					expect(JSON.parse(response._getData())).toEqual(
						expect.objectContaining(invalidDataModel)
					);
				});

				it("should throw error if passed invalid parameter", async () => {
					const { response } = await mathProblemsFetch({
						method: "GET",
						body: { position: 400000 },
					});

					expect(response._getStatusCode()).toBe(STATUS_CODE.SERVER_ERROR);
					expect(JSON.parse(response._getData())).toEqual(
						expect.objectContaining(invalidDataModel)
					);
				});
			});
		});
	});

	describe("/Others Methods", () => {
		it("should return 405 Status Code to different methods of GET", async () => {
			const { response } = await mathProblemsFetch({
				method: "POST",
			});

			expect(response._getStatusCode()).toBe(STATUS_CODE.NOT_ALLOWED_METHOD);
		});
	});
});
