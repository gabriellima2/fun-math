import {
	createContext,
	MouseEvent,
	MutableRefObject,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

import type { WithChildren } from "src/@types/TGlobals";

type CanvasEvent = MouseEvent | globalThis.MouseEvent;

interface CanvasStyle {
	width: number;
	color: string;
}

interface CanvasContextProperties {
	isDrawing: boolean;
	canvasRef: MutableRefObject<HTMLCanvasElement | null>;
	context2DRef: MutableRefObject<CanvasRenderingContext2D | null>;
	updateCanvasContext2D: (styles?: CanvasStyle) => void;
	startDrawing: (e: CanvasEvent) => void;
	draw: (e: CanvasEvent) => void;
	stopDrawing: () => void;
	clearCanvas: () => void;
}

const OVERFLOW_HIDDEN = "overflow-hidden";

export const CanvasContext = createContext({} as CanvasContextProperties);

export const CanvasContextProvider = ({ children }: WithChildren) => {
	const [isDrawing, setIsDrawing] = useState(false);
	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const context2DRef = useRef<null | CanvasRenderingContext2D>(null);

	const hideScroll = () => {
		const html = document.documentElement;
		const body = document.body;

		html.classList.add(OVERFLOW_HIDDEN);
		body.classList.add(OVERFLOW_HIDDEN);
	};

	const showScroll = () => {
		const html = document.documentElement;
		const body = document.body;

		html.classList.remove(OVERFLOW_HIDDEN);
		body.classList.remove(OVERFLOW_HIDDEN);
	};

	// Adiciona novos estilos ao Canvas atualizando o Contexto2D dele.
	const updateCanvasContext2D = (styles?: CanvasStyle) => {
		const ctx = canvasRef.current?.getContext("2d");

		if (!ctx) return;

		ctx.scale(1, 1);
		ctx.lineCap = "round";
		ctx.strokeStyle = styles?.color || ctx.strokeStyle;
		ctx.lineWidth = styles?.width || ctx.lineWidth;

		context2DRef.current = ctx;
	};

	const draw = ({ clientX, clientY }: CanvasEvent) => {
		const boundingRect = canvasRef.current?.getBoundingClientRect();

		if (!isDrawing || !boundingRect) return;

		context2DRef.current?.lineTo(
			clientX - boundingRect.left,
			clientY - boundingRect.top
		);
		context2DRef.current?.stroke();
	};

	const startDrawing = ({ clientX, clientY }: CanvasEvent) => {
		const boundingRect = canvasRef.current?.getBoundingClientRect();

		if (!boundingRect) return;

		context2DRef.current?.beginPath();
		context2DRef.current?.moveTo(
			clientX - boundingRect.left,
			clientY - boundingRect.top
		);

		setIsDrawing(true);
		hideScroll();
	};

	const stopDrawing = () => {
		context2DRef.current?.closePath();

		setIsDrawing(false);
		showScroll();
	};

	const clearCanvas = () => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");

		if (!canvas || !ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	useEffect(() => {
		return () => showScroll();
	}, []);

	return (
		<CanvasContext.Provider
			value={{
				isDrawing,
				canvasRef,
				context2DRef,
				draw,
				startDrawing,
				stopDrawing,
				clearCanvas,
				updateCanvasContext2D,
			}}
		>
			{children}
		</CanvasContext.Provider>
	);
};

export const useCanvasContext = () => useContext(CanvasContext);
