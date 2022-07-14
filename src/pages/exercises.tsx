import { NextPage } from "next";

import { Canvas } from "../components/Canvas";

import { Customized } from "../layouts/Customized";

const Exercises: NextPage = () => {
	return (
		<Customized>
			<div className="flex-center--row">
				<section className=" w-[95vw] max-w-[1000px] md:max-h-[1/2] overflow-hidden">
					<Canvas />
				</section>
			</div>
		</Customized>
	);
};

export default Exercises;
