import Image from "next/image";
import Link from "next/link";

import { Sidebar } from "./Sidebar";

export const Header = () => (
	<header className="w-full flex justify-between items-center p-4 pt-6 px-8">
		<Link href="/" tabIndex={20}>
			<a className="flex-center--row translate-y-1 z-50">
				<Image src="/logo.svg" width={100} height={40} />
			</a>
		</Link>
		<Sidebar />
	</header>
);
