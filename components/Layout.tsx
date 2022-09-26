import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../styles/components/layout.module.scss'

const siteTitle = `Let's Code Playground`

type LayoutProps = {
  children: React.ReactNode
  home: any
  originalSite: string
}

export default function Layout({ children, home, originalSite }: LayoutProps) {
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
      </Head>
      <Script src="https://kit.fontawesome.com/16ac989883.js"></Script>
      {!home && (
        <div className={styles.links}>
          <Link href="/">
            <a className={styles.backToHome}>← Back to home</a>
          </Link>
          <Link href={originalSite}>
            <a className={styles.originalLink} target="_blank">
              Original <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </Link>
        </div>
      )}
      <header className={styles.header}></header>
      <main>{children}</main>
    </div>
  )
}
