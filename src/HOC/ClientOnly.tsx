import React, { useEffect, useState } from "react";

import { ComponentType, P } from "../types";

// Usar o hook do apollo somente quando o componente for renderizado no browser
export function ClientOnly<P>(Component: ComponentType) {
	return (props: P) => {
		const [hasMounted, setHasMounted] = useState(false);

		useEffect(() => setHasMounted(true), []);

		if (!hasMounted) return null;

		return <Component {...props} />;
	};
}
