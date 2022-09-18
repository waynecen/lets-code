import BoxLink from '../components/BoxLink'
import Layout from '../components/Layout'
import styles from '../styles/base/index.module.scss'

export default function Home() {
  return (
    <Layout home>
      <div className={styles.navBar}>
        <h1 className={styles.header}>Let&apos;s Code</h1>
        <p className={styles.description}>
          A compilation of front-end features from websites and apps which have
          been broken down into code explanations. Stay tuned!
        </p>
      </div>
      <section className={styles.container}>
        <BoxLink route="mubasic">Mubasic</BoxLink>
        <BoxLink route="">
          Coming Soon<br></br>🚧👷🔧
        </BoxLink>
      </section>
    </Layout>
  )
}
