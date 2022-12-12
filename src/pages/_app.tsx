import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { ExercisePreferencesProvider } from "@contexts/ExercisePreferences";
import { ModalContextProvider } from "@contexts/ModalContext";

import { Modal } from "@components/Modal";
import { Seo } from "@components/Seo";

import { client } from "../lib/client";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ModalContextProvider>
				<ExercisePreferencesProvider>
					<Seo />
					<Modal />
					<Component {...pageProps} />
				</ExercisePreferencesProvider>
			</ModalContextProvider>
		</ApolloProvider>
	);
}

export default MyApp;
