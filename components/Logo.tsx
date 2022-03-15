import Link from "next/link";
import React from "react";
import styled, { CSSProp } from "styled-components";

const Logo: React.FC = () => {
	return (
		<StyledLogo>
			{/* <Link href="/">TESTERS</Link> */}
			TESTERS
		</StyledLogo>
	);
};
export const StyledLogo = styled.span`
	text-align: center;
	color: ${({ theme }) => theme.white};
	font-weight: 900;
	font-size: 24px;
`;
export default Logo;
