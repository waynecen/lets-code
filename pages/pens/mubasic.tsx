import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/Mubasic.module.scss";

export const codeTitle: string = `mubasic`;
export const route: string = `/routes/mubasic-keys`;

export default function mubasic() {
	return (
		<Layout>
			<Head>
				<title>Let's Code | Mubasic Piano Keys</title>
			</Head>
			<section>
				<h1>Let's Code</h1>
			</section>

			<section className={styles.demo}>
				<div className={styles.about}>
					<h1 className={styles.title}>{codeTitle}</h1>
				</div>
				<div className={styles.musicKeys}></div>
			</section>
		</Layout>
	);
}
