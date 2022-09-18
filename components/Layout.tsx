import Head from "next/head";
import Link from "next/link";
import styles from "../styles/components/layout.module.scss";

const siteTitle = `Let's Code Playground`;

type LayoutProps = {
	children: React.ReactNode;
	home: any;
};

export default function Layout({ children, home }: LayoutProps) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{siteTitle}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Explore interesting features on the web."
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
			<header className={styles.header}></header>
			<main>{children}</main>
		</div>
	);
}