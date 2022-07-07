import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { Seo } from "../components/Infra";

import { client } from "../lib/client";
import { UserChoicesContextProvider } from "../contexts/UserChoicesContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<UserChoicesContextProvider>
				<Seo />
				<Component {...pageProps} />
			</UserChoicesContextProvider>
		</ApolloProvider>
	);
}

export default MyApp;
