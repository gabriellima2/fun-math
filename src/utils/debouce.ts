let timer: NodeJS.Timeout;

export function debounce(callback: () => void, ms: number) {
	console.log(callback);
	clearTimeout(timer);
	timer = setTimeout(callback, ms);
}
