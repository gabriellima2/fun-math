import { NextPage } from "next";

import { Canvas } from "../components/Canvas";

import { Customized } from "../layouts/Customized";

const Exercises: NextPage = () => {
	return (
		<Customized>
			<div>
				<section className="flex-center--row w-[95vw] h-full overflow-hidden">
					<Canvas />
				</section>
			</div>
		</Customized>
	);
};

export default Exercises;
