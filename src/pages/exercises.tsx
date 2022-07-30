import { NextPage } from "next";

import React, { useContext } from "react";

import { Canvas } from "../components/Canvas";
import { GetExercise } from "../components/GetExercise";
import { WithOptionSelected } from "../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";
import { exercises } from "../constants";

const Exercises: NextPage = () => {
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	return (
		<>
			<div className="flex-center--col gap-8 px-2 py-6">
				<main className="w-full flex-center--col gap-2 sticky top-0 py-3 bg-main/60">
					{userSelectedOptions.exercise?.mode == exercises.mode.fetch ? (
						<GetExercise.FetchExercise query={null} />
					) : (
						<GetExercise.ClientExercise
							operator={userSelectedOptions?.operator}
						/>
					)}
				</main>

				<section className="flex-center--col gap-3">
					<div className="w-[95vw] xl:w-[70vw] max-w-fit md:max-h-[1/2] overflow-hidden">
						<span className="w-full flex justify-between pointer-events-none p-4">
							<p className="text-sm pointer-events-none font-medium text-white/50">
								Espaço para rascunho
							</p>
						</span>
						<Canvas />
					</div>
				</section>
			</div>
		</>
	);
};

//export default WithOptionSelected(Exercises);
export default Exercises;
