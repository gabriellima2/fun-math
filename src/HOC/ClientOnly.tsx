import React, { useEffect, useState } from "react";

// Usar o hook do apollo somente quando o componente for renderizado no browser
export function ClientOnly<P extends object>(
	Component: React.ComponentType<P>
) {
	return (props: P) => {
		const [hasMounted, setHasMounted] = useState(false);

		useEffect(() => setHasMounted(true), []);

		if (!hasMounted) return null;

		return <Component {...props} />;
	};
}
