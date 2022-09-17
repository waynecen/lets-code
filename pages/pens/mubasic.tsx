import Head from "next/head";
import Layout from "../../components/Layout";
import PianoKey from "../../components/PianoKey";
import styles from "../../styles/projects/mubasic.module.scss";

export const codeTitle: string = "mubasic";

export default function mubasic() {
	return (
		<Layout home={false}>
			<Head>
				<title>Let&apos;s Code | Mubasic Piano Keys</title>
			</Head>
			<section className={styles.demo}>
				<div className={styles.about}>
					<div className={styles.header}>
						<h1 className={styles.title}>{codeTitle}</h1>

						<div className={styles.logo}>
							<div className={styles.logoPart}></div>
							<div className={styles.logoMiddlePart}></div>
							<div className={styles.logoWrapper}>
								<div className={styles.logoTRPart}></div>
								<div className={styles.logoPart}></div>
							</div>
						</div>
					</div>
					<h3 className={styles.slogan}>
						The <span className={styles.accent}>#1</span>
						<br></br> source for <br></br>children&apos;s <br></br>music.
					</h3>
					<p className={styles.description}>
						An ever-growing catalogue of high-quality children&apos;s music, sourced
						by talented music creators from all over the world.
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
