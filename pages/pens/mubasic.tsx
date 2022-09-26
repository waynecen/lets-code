import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '../../components/Layout'
import PianoKey from '../../components/PianoKey'
import styles from '../../styles/projects/mubasic.module.scss'

export const codeTitle: string = 'mubasic'
const original: string = 'https://www.mubasic.com/'
const mediumUrl: string = ''

export default function mubasic() {
  return (
    <Layout home={false} originalSite={original}>
      <Head>
        <title>Let&apos;s Code | Mubasic Piano Keys</title>
      </Head>
      <Script src="https://kit.fontawesome.com/16ac989883.js"></Script>
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
            An ever-growing catalogue of high-quality children&apos;s music,
            sourced by talented music creators from all over the world.
          </p>
        </div>
        <div className={styles.musicKeys}>
          <div className={styles.wrapper}>
            <PianoKey></PianoKey>
          </div>
        </div>
      </section>
      <section className={styles.projectDetails}>
        <Link href={mediumUrl}>
          <a className={styles.mediumLink} target="_blank">
            Read the article &nbsp;
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
        </Link>
        <p className={styles.projectOverview}>
          Learn how to implement sound in your project. <br></br>
          <br></br>This project isn&apos;t limited to piano keys. Imagine other
          applications, such as a drum kit, soundboard, audio effects, and so
          on. Sound is an important sense that can have a strong impact, however
          it is underutilized in the web due to the bad reputation it gets from
          misuse (pop-up ads, autoplaying videos). <br></br>
          <br></br>Try and see what you can come up with!
        </p>
      </section>
    </Layout>
  )
}
