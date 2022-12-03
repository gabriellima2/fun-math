import { Touch } from "react";

export function createMouseEvent(
	pointer: Touch,
	event: string,
	callback: (param: MouseEvent) => void
) {
	const mouseEvent = new MouseEvent(event, {
		clientX: pointer.clientX,
		clientY: pointer.clientY,
	});

	callback(mouseEvent);
}
