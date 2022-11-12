import { GoToTopButton } from "./Buttons/GoToTopButton";
import { QuickNavigation } from "./QuickNavigation";
import { Container } from "./Container";
import { Copyright } from "./Copyright";
import { Contacts } from "./Contacts";
import { Logo } from "./Logo";

export const Footer = () => (
	<footer className="p-6">
		<Container className="flex flex-col justify-between items-center gap-12 py-0 pt-12 border-t-2 border-utils-secondary">
			<div className="w-full flex flex-col lg:flex-row items-end lg:items-center justify-between gap-12 lg:gap-0">
				<section className="flex flex-col items-start gap-5 self-start">
					<Logo />
					<small className="sm:w-[400px] text-xs md:text-[0.820rem] md:leading-normal opacity-70">
						Matemática faz parte da nossa vida, principalmente cálculos simples.
						A FunMath é focada em disponibilizar o aprendizado de Operadores
						Básicos da Matemática.
					</small>
				</section>

				<div className="w-full flex items-center justify-between md:justify-evenly flex-wrap">
					<section>
						<h2 className="font-semibold mb-2 text-sm md:text-base">Navegar</h2>
						<QuickNavigation className="flex flex-col gap-2 md:gap-1" />
					</section>

					<section>
						<Contacts className="flex gap-4 md:gap-5" />
					</section>
				</div>

				<GoToTopButton />
			</div>

			<Copyright />
		</Container>
	</footer>
);
