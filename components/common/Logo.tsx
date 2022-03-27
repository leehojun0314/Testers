import Link from "next/link";
import React from "react";
import styled, { CSSProp } from "styled-components";

const Logo: React.FC = () => {
	return (
		<>
			<Link href={"/"} passHref>
				<StyledLogo>TESTERS</StyledLogo>
			</Link>
		</>
	);
};
export const StyledLogo = styled.span`
	text-align: center;
	color: ${({ theme }) => theme.blue};
	font-weight: 900;
	font-size: 24px;
`;
export default Logo;
