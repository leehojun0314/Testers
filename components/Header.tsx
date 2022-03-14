import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import AppLink from "./AppLink";
import Container from "./Container";
import Logo from "./Logo";
// import Logo from "public/images/logo";
const Header: NextPage = () => {
	return (
		<HeaderWrapper>
			<Container>
				{/* <Image
					src="/images/Logo.png"
					alt="testersLogo"
					width="100%"
					height="50px"
				></Image> */}
				<div className="logo">
					<Logo />
				</div>
				<nav>
					<ul className="clearfix">
						<li>
							<AppLink label="테스트" href="/test"></AppLink>
						</li>
						<li>
							<AppLink label="순위" href="/ranking"></AppLink>
						</li>
						<li>
							<AppLink label="만들기" href="/create"></AppLink>
						</li>
					</ul>
				</nav>
			</Container>
		</HeaderWrapper>
	);
};
export default Header;

const HeaderWrapper = styled.header`
	height: 68px;
	background-color: blue;
	position: sticky;
	top: 0px;
	Image {
	}
	nav {
		display: inline-block;
		padding-left: 32px;
	}
	li {
		float: left;
		padding-left: 30px;
	}
	.logo {
		/* height: inherit; */
		display: inline-block;
		/* height: 68px; */
		line-height: 68px;
		/* background-color: red; */
	}
`;
