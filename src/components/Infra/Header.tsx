import { Sidebar } from "../Sidebar";
import { Logo } from "./Logo";

export const Header = () => (
	<header className="w-full flex justify-between items-center p-4 pt-6 px-8">
		<Logo />
		<Sidebar />
	</header>
);
