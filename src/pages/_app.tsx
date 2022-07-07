import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { Seo } from "../components/Infra";

import { client } from "../lib/client";
import { SelectedOperatorContextProvider } from "../contexts/SelectedOperatorContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<SelectedOperatorContextProvider>
				<Seo />
				<Component {...pageProps} />
			</SelectedOperatorContextProvider>
		</ApolloProvider>
	);
}

export default MyApp;
