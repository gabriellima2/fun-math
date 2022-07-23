interface StatusProps {
	type: "success" | "error" | "default";
}

export const Status = (props: StatusProps) => (
	<div className="container w-full flex-center--row gap-2 bg-canvas-tools">
		{props.type == "default" ? (
			<>
				<span className="block w-full p-1 rounded-lg bg-black-100"></span>
				<p className="text-center text-white/40 font-util font-semibold">
					Sem Dados!
				</p>
			</>
		) : props.type == "error" ? (
			<>
				<span className="block w-full p-1 rounded-lg bg-red-400"></span>
				<p className="text-red-300 font-util font-semibold"> Errado!</p>
			</>
		) : (
			<>
				<span className="block w-full p-1 rounded-lg bg-green-400"></span>
				<p className="text-green-300 font-util font-semibold"> Certo!</p>
			</>
		)}
	</div>
);
