import Link, { LinkProps } from "next/link";
import React from "react";
import theme from "../styles/theme";
interface AppLinkProps extends LinkProps {
	href: string;
}
const AppLink: React.FC<AppLinkProps> = ({ href, children }) => {
	return <Link href={href}>{children}</Link>;
};
export default AppLink;
