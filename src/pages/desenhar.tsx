import { NextPage } from "next";

import { CanvasContextProvider } from "@contexts/CanvasContext";

import { Canvas } from "@components/Canvas";
import { Customized } from "@layouts/Customized";

const Draw: NextPage = () => {
	return (
		<Customized>
			<main className="w-full h-full flex-center--col mt-6 sm:mt-10 overflow-hidden">
				<div className="w-[95vw] xl:w-[80vw] max-w-fit xl:max-w-[1600px] md:max-h-[1/2] overflow-x-hidden">
					<CanvasContextProvider>
						<Canvas />
					</CanvasContextProvider>
				</div>
			</main>
		</Customized>
	);
};

export default Draw;
