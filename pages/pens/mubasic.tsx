import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/Mubasic.module.scss";
import PianoKey from "../../components/PianoKey";

export const codeTitle: string = `mubasic`;
export const route: string = `/routes/mubasic-keys`;

export default function mubasic() {
	return (
		<Layout>
			<Head>
				<title>Let's Code | Mubasic Piano Keys</title>
			</Head>
			<section className={styles.demo}>
				<div className={styles.about}></div>
				<div className={styles.musicKeys}>
					<div className={styles.wrapper}>
						<PianoKey></PianoKey>
					</div>
				</div>
			</section>
		</Layout>
	);
}
