import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
	<Link href="/" tabIndex={20}>
		<a className="flex-center--row translate-y-1 z-50">
			<Image src="/logo.svg" alt="Logo FunMath!" width={50} height={25} />
		</a>
	</Link>
);
