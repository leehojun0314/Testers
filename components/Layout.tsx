import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
interface LayoutProps {
	pageTitle: string;
}
const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<div>
				<Header />
				<StyledMain>{children}</StyledMain>
				<Footer />
			</div>
		</>
	);
};
export default Layout;
const StyledMain = styled.main`
	height: 1000px;
`;
