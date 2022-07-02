import Image from "next/image";
import Link from "next/link";

export const Header = () => (
	<header className="w-full flex justify-center p-3 px-4">
		<Link href="/">
			<a>
				<Image src="/logo.svg" width={100} height={60} />
			</a>
		</Link>
	</header>
);
