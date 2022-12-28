import { BsInfoLg } from "react-icons/bs";
import { Article } from "./Article";

const texts = [
	{
		title: "Adição",
		paragraph:
			"A idéia da Adição é acrescentar um número a outro, e o resultado dessa ação recebe o nome de Soma. Então, tudo que devemos juntar/acrescentar usamos a Adição.",
	},
	{
		title: "Subtração",
		paragraph:
			"A idéia da Subtração é retirar uma quantidade de algum valor, resultando na diferença entre os valores calculados. Quando queremos descobrir a diferença entre os valores/resultado se retirado uma certa quantidade, usamos a Subtração.",
	},
	{
		title: "Divisão",
		paragraph:
			"A operação de Divisão consiste em fracionar/dividir em partes algum valor, resultando no Quociente. Uma divisão exata é quando o resto é 0 e uma divisão não exata é quando o resto é diferente de 0. Quando queremos dividir/distribuir igualmente algum valor usamos a Divisão.",
	},
	{
		title: "Multiplicação",
		paragraph:
			"Podemos resumir a Multiplicação em uma soma sucessiva de um mesmo número, resultando no Produto. Quando queremos descobrir o resultado de um número somado N vezes, usamos a multiplicação.",
	},
];

const ButtonContent = () => (
	<>
		<i>
			<BsInfoLg />
		</i>
		Teoria
	</>
);

const Content = () => {
	return (
		<section className="flex flex-col gap-6 md:gap-8">
			{texts.map((text, index) => (
				<Article key={index} title={text.title} paragraph={text.paragraph} />
			))}
		</section>
	);
};

export const Theory = {
	Content,
	ButtonContent,
};
