import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import BoxLink from "../components/BoxLink";
import utils from "../styles/utils.module.scss";
import { slugOne } from "../pages/pens/mubasic";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utils.container}>
				<BoxLink route={slugOne} index="01">
					Mubasic
				</BoxLink>
				<BoxLink route="2">Coming Soon</BoxLink>
			</section>
		</Layout>
	);
}
