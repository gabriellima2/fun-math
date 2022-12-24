import Image from "next/image";

interface LoadingProps {
	variant: "small" | "fullscreen";
}

export const Loading = ({ variant }: LoadingProps) => {
	return (
		<div
			className={`${variant === "fullscreen" && "h-screen"} flex-center--row`}
		>
			<Image src="/loading.gif" alt="Carregando..." width="25" height="25" />
		</div>
	);
};
