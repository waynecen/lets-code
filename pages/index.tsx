import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utils from "../styles/utils.module.scss";
import BoxLink from "../components/BoxLink";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<h1 className={utils.header}>Let&apos;s Code</h1>
			<section className={utils.container}>
				<BoxLink route="mubasic">Mubasic</BoxLink>
				<BoxLink route="">
					Coming Soon<br></br>🚧👷🔧
				</BoxLink>
			</section>
		</Layout>
	);
}
