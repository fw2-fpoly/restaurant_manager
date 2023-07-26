import { Breadcrumb, BreadcrumbItem, Link } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Link as ReactLink } from "react-router-dom";
import { IconChevronRight } from "~/components/Icons";

type Props = {};

const BreadcrumbHome = (props: Props) => {
	const location = useLocation();
	const pathname = location.pathname;
	const title = pathname.split("/")[1].charAt(0).toUpperCase() + pathname.split("/")[1].slice(1);

	return (
		<Breadcrumb
			spacing="2"
			fontSize="md"
			separator={<IconChevronRight boxSize={4} />}
		>
			<BreadcrumbItem>
				<Link as={ReactLink}>Home</Link>
			</BreadcrumbItem>

			{pathname !== "/" && (
				<BreadcrumbItem>
					<Link
						as={ReactLink}
						to={pathname}
					>
						{title}
					</Link>
				</BreadcrumbItem>
			)}
		</Breadcrumb>
	);
};

export default BreadcrumbHome;
