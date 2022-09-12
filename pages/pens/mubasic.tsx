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
				<div className={styles.about}>
					<div className={styles.header}>
						<h1 className={styles.title}>{codeTitle}</h1>
						<div className={styles.logo}></div>
					</div>
					<h3 className={styles.slogan}>
						The <span className={styles.accent}>#1</span>
						<br></br> source for <br></br>children's <br></br>music.
					</h3>
					<p className={styles.description}>
						An ever-growing catalogue of high-quality children's music, sourced by
						talented music creators from all over the world.
					</p>
				</div>
				<div className={styles.musicKeys}>
					<div className={styles.wrapper}>
						<PianoKey></PianoKey>
					</div>
				</div>
			</section>
		</Layout>
	);
}
