import React from "react";
import styled from "styled-components";
import Container from "./Container";
const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<Container>
				<p>&copy; Martin & Teo</p>
			</Container>
		</StyledFooter>
	);
};
export default Footer;

const StyledFooter = styled.footer`
	text-align: center;
	height: 198px;
	line-height: 198px;
	background-color: ${({ theme }) => theme.dark};
	color: ${({ theme }) => theme.white};
`;
