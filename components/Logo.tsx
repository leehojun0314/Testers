import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Logo: React.FC = () => {
	return (
		<StyledLogo>
			<Link href="/">TESTERS</Link>
		</StyledLogo>
	);
};
const StyledLogo = styled.h1`
	text-align: center;
	color: ${({ theme }) => theme.white};
	font-weight: 900;
	font-size: 36px;
	background-color: red;
`;
export default Logo;
