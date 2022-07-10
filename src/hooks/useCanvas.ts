import { MutableRefObject, useEffect, useRef } from "react";

function setDefaultCanvasSettings(canvas: HTMLCanvasElement) {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	canvas.width = windowWidth * 2;
	canvas.height = windowHeight * 2;

	canvas.style.width = `${windowWidth}px;`;
	canvas.style.height = `${windowHeight}px;`;
}

function setDefaultContextSettings(
	context: CanvasRenderingContext2D,
	ref: MutableRefObject<any>
) {
	context.scale(2, 2);
	context.lineCap = "round";
	context.strokeStyle = "white";
	context.lineWidth = 4;

	ref.current = context;
}

export function useCanvas(
	canvasRef: MutableRefObject<null | HTMLCanvasElement>
) {
	const contextRef = useRef<null | CanvasRenderingContext2D>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		if (!canvas || !context) return;

		setDefaultCanvasSettings(canvas);
		setDefaultContextSettings(context, contextRef);
	}, []);

	return {
		contextRef,
	};
}
