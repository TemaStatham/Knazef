import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Визитка</title>
        <meta name="description" content="Моя персональная визитка" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Иванов Артём!
        </h1>

        <p className={styles.description}>
          Junior Fullstack developer.
        </p>

        <div className={styles.grid}>
          <a href="mailto:ваша_почта@example.com" className={styles.card}>
            <h2>Контакты &rarr;</h2>
            <p>Свяжитесь со мной по электронной почте.</p>
          </a>

          <a href="https://github.com/ваш_профиль" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Посмотрите мои проекты и репозитории на GitHub.</p>
          </a>

          <a href="https://linkedin.com/in/ваш_профиль" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <p>Свяжитесь со мной в LinkedIn.</p>
          </a>

          <a
            href="https://ваш-сайт.com"
            className={styles.card}
          >
            <h2>Мой сайт &rarr;</h2>
            <p>Узнайте больше обо мне и моих проектах.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Иванов Артём. Все права защищены.</p>
      </footer>
    </div>
  )
}
