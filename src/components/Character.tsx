import Image from "next/image";
import { useEffect, useState } from "react";

interface EyeProps {
	centralize: boolean;
	blink: boolean;
}

export const Eye = ({ centralize, blink }: EyeProps) => (
	<div className="w-10 h-10 bg-white rounded-full relative">
		<span
			className={`w-10 ${
				blink ? "h-6" : "h-0"
			} rounded-t-full bg-accents-purple z-50 absolute top-0`}
		></span>
		<span
			className={`w-6 h-6 bg-black-900 rounded-full absolute top-[20%] ${
				centralize && "left-1/2 -translate-x-1/2"
			}`}
		></span>
	</div>
);

export const Character = () => {
	const [centerIris, setCenterIris] = useState(false);
	const [eyeIsBlinking, setEyeIsBlink] = useState(false);

	let time: undefined | NodeJS.Timeout;

	useEffect(() => {
		if (!eyeIsBlinking) return;

		clearTimeout(time);
		time = setTimeout(() => setEyeIsBlink(false), 100);

		return () => clearTimeout(time);
	}, [eyeIsBlinking]);

	return (
		<div
			className="relative w-fit"
			onMouseDown={() => setEyeIsBlink(true)}
			onMouseEnter={() => setCenterIris(true)}
			onMouseLeave={() => setCenterIris(false)}
		>
			<Image
				src="/character.svg"
				width={310}
				height={370}
				className="cursor-pointer"
			/>
			<div className="flex gap-24 absolute top-[87px] left-[68px]">
				<Eye centralize={centerIris} blink={eyeIsBlinking} />
				<Eye centralize={centerIris} blink={eyeIsBlinking} />
			</div>
		</div>
	);
};
