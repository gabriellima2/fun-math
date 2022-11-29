import {
	createContext,
	MouseEvent,
	MutableRefObject,
	useContext,
	useRef,
	useState,
} from "react";

import type { WithChildren } from "@globalTypes/TGlobals";

type CanvasEvent = MouseEvent | globalThis.MouseEvent;

interface CanvasStyle {
	width: number;
	color: string;
}

interface DraftContextProperties {
	isDrawing: boolean;
	canvasRef: MutableRefObject<HTMLCanvasElement | null>;
	context2DRef: MutableRefObject<CanvasRenderingContext2D | null>;
	updateCanvasContext2D: (styles?: CanvasStyle) => void;
	startDrawing: (e: CanvasEvent) => void;
	draw: (e: CanvasEvent) => void;
	stopDrawing: () => void;
	clearCanvas: () => void;
}

export const DraftContext = createContext({} as DraftContextProperties);

export const DraftContextProvider = ({ children }: WithChildren) => {
	const [isDrawing, setIsDrawing] = useState(false);
	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const context2DRef = useRef<null | CanvasRenderingContext2D>(null);

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
	};

	const stopDrawing = () => {
		context2DRef.current?.closePath();

		setIsDrawing(false);
	};

	const clearCanvas = () => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");

		if (!canvas || !ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	return (
		<DraftContext.Provider
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
		</DraftContext.Provider>
	);
};

export const useDraftContext = () => useContext(DraftContext);
