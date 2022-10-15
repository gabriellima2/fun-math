import { NextPage } from "next";

import { Canvas } from "@components/Draw";
import { Customized } from "../layouts/Customized";

const Draw: NextPage = () => {
	return (
		<Customized>
			<main className="w-full h-full flex-center--col mt-6 sm:mt-10 overflow-hidden">
				<div className="w-[95vw] xl:w-[70vw] max-w-fit md:max-h-[1/2] overflow-x-hidden">
					<Canvas />
				</div>
			</main>
		</Customized>
	);
};

export default Draw;
