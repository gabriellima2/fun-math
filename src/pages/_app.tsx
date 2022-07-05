import type { AppProps } from "next/app";

import { Seo } from "../components/Infra";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Seo />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
