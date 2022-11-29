import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { ExercisePreferencesProvider } from "@contexts/ExercisePreferences";
import { Seo } from "@components/Seo";

import { client } from "../lib/client";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ExercisePreferencesProvider>
				<Seo />
				<Component {...pageProps} />
			</ExercisePreferencesProvider>
		</ApolloProvider>
	);
}

export default MyApp;
