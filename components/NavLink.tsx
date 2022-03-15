import Link from "next/link";
import React from "react";

interface NavLinkProps {
	href: string;
}
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
	return <Link href={href}>{children}</Link>;
};
export default NavLink;
