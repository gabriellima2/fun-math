import Image from "next/image";

const Default = () => (
	<div className="flex-center--row">
		<Image src="/loading.gif" alt="Carregando..." width="25" height="25" />
	</div>
);

const FullScreen = () => (
	<div className="gradient-background">
		<Image src="/loading.gif" alt="Carregando..." width="25" height="25" />
	</div>
);

export const Loading = { Default, FullScreen };
