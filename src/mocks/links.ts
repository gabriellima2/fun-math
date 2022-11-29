import {
	BsFillHouseFill,
	BsFillQuestionCircleFill,
	BsVectorPen,
} from "react-icons/bs";
import type { IconType } from "react-icons";

export interface ILink {
	id: number;
	name: string;
	href: string;
	icon: IconType;
}

export const links: ILink[] = [
	{
		id: 0,
		name: "Início",
		href: "/",
		icon: BsFillHouseFill,
	},
	{
		id: 1,
		name: "Exercícios",
		href: "/configuracoes-exercicios",
		icon: BsFillQuestionCircleFill,
	},
	{
		id: 2,
		name: "Área de Rascunhos",
		href: "/desenhar",
		icon: BsVectorPen,
	},
];
