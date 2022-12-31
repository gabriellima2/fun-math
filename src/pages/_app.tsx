import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";

import { ExercisePreferencesProvider } from "@contexts/ExercisePreferences";

import { Seo } from "@components/Seo";

import { client } from "../lib/client";
import { store } from "@redux/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<ExercisePreferencesProvider>
					<Seo />
					<Component {...pageProps} />
				</ExercisePreferencesProvider>
			</Provider>
		</ApolloProvider>
	);
}

export default MyApp;
