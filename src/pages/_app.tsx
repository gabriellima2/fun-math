import type { AppProps } from "next/app";

import { HeadSEO } from "../infra/HeadSEO";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadSEO />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
