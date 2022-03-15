import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import AppLink from "./AppLink";
import Container from "./Container";
import Logo, { StyledLogo } from "./Logo";
import NavLink from "./NavLink";
// import Logo from "public/images/logo";
const Header: NextPage = () => {
	return (
		<HeaderWrapper>
			<Container>
				<Logo />
				<nav className="leftNav">
					<ul className="clearfix">
						<li>
							<NavLink href="/">
								<p className="navList">홈</p>
							</NavLink>
						</li>
						<li>
							<NavLink href="/apply">
								<p className="navList">응시하기</p>
							</NavLink>
						</li>
						<li>
							<NavLink href="/test">
								<p className="navList">만들기</p>
							</NavLink>
						</li>
					</ul>
				</nav>
				<nav className="rightNav">
					<li>
						<AppLink label="로그인" href="/login" />
					</li>
					<li>
						<AppLink label="회원가입" href="/signup" />
					</li>
				</nav>
			</Container>
		</HeaderWrapper>
	);
};
export default Header;

const HeaderWrapper = styled.header`
	height: 68px;
	background-color: ${({ theme }) => theme.blue};
	position: sticky;
	top: 0px;
	Image {
	}
	nav {
		display: inline-block;
		/* padding-left: 32px; */
		position: relative;
		top: 11px;
		font-size: 16px;
		font-weight: bold;
	}

	li {
		float: left;
		padding-left: 24px;
		list-style: none;
		cursor: pointer;
	}
	.navList {
		color: white;
	}

	${StyledLogo} {
		display: inline-block;
		position: relative;
		top: 5px;
		margin-right: 24px;
	}
	.rightNav {
		float: right;
		color: white;
	}
`;
