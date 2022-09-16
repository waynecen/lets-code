import Link from "next/link";
import styles from "../styles/components/boxlink.module.scss";

export default function BoxLink({ children, route }) {
	return (
		<Link href={"/pens/" + route}>
			<div className={styles.wrapper}>
				<div className={styles.box}>
					<a className={styles.linkText}>{children}</a>
				</div>
			</div>
		</Link>
	);
}
