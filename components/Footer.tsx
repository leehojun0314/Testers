import React from "react";
import styled from "styled-components";
import Container from "./Container";
const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<Container>
				<p>&copy; Leehojun</p>
			</Container>
		</StyledFooter>
	);
};
export default Footer;

const StyledFooter = styled.footer`
	text-align: center;
	height: 100%;
	min-height: 396px;
	background-color: ${({ theme }) => theme.dark};
	color: ${({ theme }) => theme.white};
`;
