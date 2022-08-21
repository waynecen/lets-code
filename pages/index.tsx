import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import BoxLink from "../components/boxlink";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.grid}>
				<BoxLink route="mubasic">Mubasic</BoxLink>
				<BoxLink route="2">Coming Soon</BoxLink>
			</section>
		</Layout>
	);
}
