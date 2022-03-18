import React from "react";
import styled from "styled-components";
import Container from "../../layouts/Container";
const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<Container>
				<p>&copy; Develop: Martin </p>
				<p>&copy; Design: Teo</p>
			</Container>
		</StyledFooter>
	);
};
export default Footer;

const StyledFooter = styled.footer`
	height: 198px;
	/* line-height: 198px; */
	background-color: ${({ theme }) => theme.dark};
	color: ${({ theme }) => theme.white};

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;
