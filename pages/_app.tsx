// import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/bootStrapTheme.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/common/Header";
import { ThemeProvider as ThemeProviderSC } from "styled-components";
import { ThemeProvider } from "react-bootstrap";
import theme from "../styles/theme";
import GlobalStyle from "../styles/Global";
import { SSRProvider } from "react-bootstrap";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SSRProvider>
			<ThemeProvider
				breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
			>
				<ThemeProviderSC theme={theme}>
					<Head>
						<title>Testers</title>
						<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
					</Head>
					<Component {...pageProps} />

					<GlobalStyle />
				</ThemeProviderSC>
			</ThemeProvider>
		</SSRProvider>
	);
}

export default MyApp;
