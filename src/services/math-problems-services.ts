export const mathProblemsServices = {
	get: async () => {
		const response = await fetch("/api/exercises/math-problems", {
			method: "GET",
		});
		return response;
	},
};
