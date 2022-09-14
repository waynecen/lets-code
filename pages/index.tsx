import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import BoxLink from "../components/BoxLink.tsx";
import utils from "../styles/utils.module.scss";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utils.container}>
				<BoxLink route="mubasic" index="01">
					Mubasic
				</BoxLink>
				<BoxLink route="" index="02">
					Coming Soon
				</BoxLink>
			</section>
		</Layout>
	);
}
