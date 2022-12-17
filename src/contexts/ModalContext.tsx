import { createContext, useState, useContext } from "react";
import type { WithChildren } from "@global-types/TGlobals";

interface Properties {
	isOpen: boolean;
	children: (() => JSX.Element) | null;
}

interface ModalContextProperties extends Properties {
	handleOpen: (children: () => JSX.Element) => void;
	handleClose: () => void;
}

const ModalContext = createContext({} as ModalContextProperties);

export const ModalContextProvider = ({ children }: WithChildren) => {
	const [properties, setProperties] = useState({
		isOpen: false,
		children: null,
	} as Properties);

	const handleClose = () => {
		setProperties({
			isOpen: false,
			children: null,
		});
	};

	const handleOpen = (children: () => JSX.Element) => {
		setProperties({
			isOpen: true,
			children,
		});
	};

	return (
		<ModalContext.Provider
			value={{
				isOpen: properties.isOpen,
				children: properties.children,
				handleClose,
				handleOpen,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModalContext = () => useContext(ModalContext);
