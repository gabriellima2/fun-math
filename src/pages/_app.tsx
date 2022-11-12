import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { Seo } from "../components/Seo";

import { client } from "../lib/client";
import { ExercisePreferencesProvider } from "../contexts/ExercisePreferences";
import { CurrentExerciseContextProvider } from "../contexts/CurrentExerciseContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ExercisePreferencesProvider>
				<CurrentExerciseContextProvider>
					<Seo />
					<Component {...pageProps} />
				</CurrentExerciseContextProvider>
			</ExercisePreferencesProvider>
		</ApolloProvider>
	);
}

export default MyApp;
