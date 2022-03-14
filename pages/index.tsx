import type { NextPage } from "next";
import Container from "../components/Container";
// import Layout from "../components/Layout";
import Layout from "../components/Layout";
const Home: NextPage = () => {
	return (
		<Layout pageTitle="Main">
			<Container>this is main page</Container>
		</Layout>
	);
};

export default Home;
