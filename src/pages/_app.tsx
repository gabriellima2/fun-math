import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { Seo } from "../components/Infra";

import { client } from "../lib/client";
import { UserSelectedOptionsContextProvider } from "../contexts/UserSelectedOptionsContext";
import { CurrentExerciseContextProvider } from "../contexts/CurrentExerciseContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<UserSelectedOptionsContextProvider>
				<CurrentExerciseContextProvider>
					<Seo />
					<Component {...pageProps} />
				</CurrentExerciseContextProvider>
			</UserSelectedOptionsContextProvider>
		</ApolloProvider>
	);
}

export default MyApp;
