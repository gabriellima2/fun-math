import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { ExercisePreferencesProvider } from "@contexts/ExercisePreferences";

import { Seo } from "@components/Seo";

import { store } from "@redux/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ExercisePreferencesProvider>
				<Seo />
				<Component {...pageProps} />
			</ExercisePreferencesProvider>
		</Provider>
	);
}

export default MyApp;
