import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://github.com/GuilhermeFujita.png'
          />
          <div className={styles.authorInfo}>
            <strong>Guilherme Fujita</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time title='04 de junho as 13:58h' dateTime='2022-04-06 13:58:11'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href='#'>jane.design/doctorcare</a>
        </p>
        <p>
          <a href='#'>#novoprojeto</a> <a href='#'>##nlw</a>{' '}
          <a href='#'>#rocketseat</a>{' '}
        </p>
      </div>
    </article>
  );
}
