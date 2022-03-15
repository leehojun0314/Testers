import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
interface NavLinkProps {
	href: string;
}
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
	const child = React.Children.only(children);
	const router = useRouter();

	return (
		<Link href={href}>
			{React.cloneElement(child, {
				className: router.pathname === href ? "currentPage" : null,
			})}
		</Link>
	);
};
export default NavLink;
