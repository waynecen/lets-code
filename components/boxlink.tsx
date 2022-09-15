import styles from "./boxlink.module.scss";
import Link from "next/link";

export default function BoxLink({ children, route }) {
	return (
		<div className={styles.box}>
			<Link href={"/pens/" + route}>
				<a className={styles.linkText}>{children}</a>
			</Link>
		</div>
	);
}
