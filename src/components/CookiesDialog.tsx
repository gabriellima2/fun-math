interface CookiesDialogProps {
	handlePersistedData: (param: boolean) => void;
}

export const CookiesDialog = (props: CookiesDialogProps) => {
	return (
		<div className="w-screen h-screen gradient-background p-4">
			<main className="w-full max-h-[90vh] sm:max-h-fit flex-center--col bg-black-800/40 rounded-md border-black-600/30 border-8 p-2 py-4">
				<h1 className="text-2xl font-semibold text-center">
					Continuar do exercício que parou anteriormente?
				</h1>

				<div className="flex-center--col gap-2 mt-8">
					<button
						type="button"
						onClick={() => props.handlePersistedData(false)}
						className="font-normal text-base hover--default"
					>
						Não, começar do início
					</button>
					<button
						type="button"
						onClick={() => props.handlePersistedData(true)}
						className="font-semibold text-base sm:text-lg gradient-text hover--default"
					>
						Sim, quero continuar!
					</button>
				</div>
			</main>
		</div>
	);
};
