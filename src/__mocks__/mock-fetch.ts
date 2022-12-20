import {
	createMocks,
	MockRequest,
	MockResponse,
	RequestOptions,
	ResponseOptions,
} from "node-mocks-http";

export async function mockFetch<Request, Response>(
	api: (req: any, res: any) => void,
	reqOptions?: RequestOptions,
	resOptions?: ResponseOptions
): Promise<{
	request: MockRequest<Request>;
	response: MockResponse<Response>;
}> {
	const { req, res } = createMocks(reqOptions, resOptions);
	api(req, res);

	return {
		request: req,
		response: res,
	};
}
