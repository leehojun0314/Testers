import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import AppLink from "./AppLink";
// import Container from "../../layouts/Container";
import Logo, { StyledLogo } from "./Logo";
import NavLink from "./NavLink";
import { Container, Nav, Navbar } from "react-bootstrap";
// import Logo from "public/images/logo";
const Header: NextPage = () => {
	return (
		// <HeaderWrapper>
		// 	 <Container>
		// 		<Logo />
		// 		<nav className="leftNav">
		// 			<ul className="clearfix">
		// 				<li>
		// 					<NavLink href="/">
		// 						<p>홈</p>
		// 					</NavLink>
		// 				</li>
		// 				<li>
		// 					<NavLink href="/apply">
		// 						<p>응시하기</p>
		// 					</NavLink>
		// 				</li>
		// 				<li>
		// 					<NavLink href="/test">
		// 						<p>만들기</p>
		// 					</NavLink>
		// 				</li>
		// 			</ul>
		// 		</nav>
		// 		<nav className="rightNav">
		// 			<li>
		// 				<AppLink href="/login">
		// 					<p>로그인</p>
		// 				</AppLink>
		// 			</li>
		// 			<li>
		// 				<AppLink href="/signup">
		// 					<p>회원가입</p>
		// 				</AppLink>
		// 			</li>
		// 		</nav>
		// 	</Container> 
		
		// </HeaderWrapper>
		<Navbar sticky="top" variant="light" expand='md'>
			<Container>
			<Navbar.Brand href="/">
				TESTERS
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse id="navbarhScroll">
			<Nav className="me-auto">
				<Nav.Link href="/">홈</Nav.Link>
				<Nav.Link href="/apply">응시하기</Nav.Link>
				<Nav.Link href="/test">만들기</Nav.Link>
			</Nav>
			</Navbar.Collapse>
		
	</Container>
	</Navbar>
	);
};
export default Header;

const HeaderWrapper = styled.header`
	/* height: 58px;
	background-color: ${({ theme }) => theme.blue};
	position: sticky;
	top: 0px;
	z-index: 2;
	Image {
	}
	nav {
		display: inline-block;
		position: relative;
		top: 11px;
		font-size: 16px;
		font-weight: bold;
		color: white;
	}

	li {
		float: left;
		padding-left: 24px;
		list-style: none;
	}
	p {
		color: white;
		transition: color 0.2s ease-in;
		cursor: pointer;
	}
	p:hover {
		color: black;
	}
	.currentPage {
		color: black;
	}
	${StyledLogo} {
		display: inline-block;
		position: relative;
		top: 5px;
		margin-right: 24px;
		cursor: pointer;
	}
	.rightNav {
		float: right;
	} */
`;
