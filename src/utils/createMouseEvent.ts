import { Touch } from "react";

import { CanvasEvent } from "@types/TCanvas";

export function createMouseEvent(
	pointer: Touch,
	event: string,
	callback: (param: CanvasEvent) => void
) {
	const mouseEvent = new MouseEvent(event, {
		clientX: pointer.clientX,
		clientY: pointer.clientY,
	});

	callback(mouseEvent);
}
