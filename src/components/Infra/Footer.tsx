import { Copyright } from "./Copyright";
import { GoToTopButton } from "../Buttons";

export const Footer = () => (
	<footer className="flex justify-between items-center p-2 px-6">
		<Copyright />
		<GoToTopButton />
	</footer>
);
