import styles from "./boxlink.module.scss";
import Link from "next/link";

type BoxLinkProps = {
	children: React.ReactNode;
	route: string;
	index: string;
};

export default function BoxLink({ children, route, index }: BoxLinkProps) {
	return (
		<div className={styles.box}>
			<Link href={"/pens/" + route}>
				<a className={styles.linkText}>{children}</a>
			</Link>
		</div>
	);
}
