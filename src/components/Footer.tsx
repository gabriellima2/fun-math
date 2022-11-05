import { Copyright } from "./Copyright";
import { GoToTopButton } from "./Buttons";

const links = [
	{
		href: "https://www.linkedin.com/in/gabriel-lima-860612236",
		text: "linkedin",
	},
	{
		href: "https://github.com/gabriellima2/fun-math",
		text: "informações técnicas",
	},
];

export const Footer = () => (
	<footer className="flex justify-between items-center p-6">
		<section className="w-full flex-center--col sm:flex-row gap-8">
			<Copyright />
			<nav className="flex-center--row flex-wrap sm:flex-nowrap gap-8">
				{links.map((link) => (
					<a
						key={link.text}
						href={link.href}
						className="font-medium text-sm capitalize hover--default"
					>
						{link.text}
					</a>
				))}
			</nav>
		</section>

		<GoToTopButton />
	</footer>
);
