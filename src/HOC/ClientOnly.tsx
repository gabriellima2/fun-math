import React, { useEffect, useState } from "react";

import type { Component } from "@global-types/TGlobals";

// Usar o hook do apollo somente quando o componente for renderizado no browser
export function ClientOnly<P extends object>(Component: Component<P>) {
	return function HighOrder(props: P) {
		const [hasMounted, setHasMounted] = useState(false);

		useEffect(() => setHasMounted(true), []);

		if (!hasMounted) return null;

		return <Component {...props} />;
	};
}
