import Link, { LinkProps } from "next/link";
import React from "react";
import theme from "../styles/theme";
interface AppLinkProps extends LinkProps {
	label: string;
	href: string;
	color?: string;
}
const AppLink: React.FC<AppLinkProps> = ({ href, label, color }) => {
	return (
		<Link href={href}>
			<a style={{ color: color ? color : theme.white }}>{label}</a>
		</Link>
	);
};
export default AppLink;
