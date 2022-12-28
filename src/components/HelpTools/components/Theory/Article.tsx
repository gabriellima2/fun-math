interface ArticleProps {
	title: string;
	paragraph: string;
}

export const Article = ({ title, paragraph }: ArticleProps) => (
	<article>
		<h1 className="flex items-center gap-1 md:gap-2 text-base md:text-xl font-semibold mb-1 md:mb-2 relative">
			<span className="w-[3px] h-4 md:h-5 block bg-accents-primary" />
			{title}
		</h1>
		<p className="text-sm md:text-base">{paragraph}</p>
	</article>
);
