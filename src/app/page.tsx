import Image from "next/image";
import styles from "./page.module.css";
import { icons } from "./constants/insex";
import Cards from "./components/card";
import TopCards from "./components/top10";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Image
          className={styles.startImg}
          src="/indiana.png"
          alt="Indiana Djons"
          width={1250}
          height={800}
          priority
        />
      </div>
      <div className={styles.logoWrapper}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="logo"
          width={144}
          height={50}
          priority
        />
      </div>
      <section className={styles.filmWrapper}>
        <Image
          className={styles.logo}
          src="/indiandText.png"
          alt="BoxIcon"
          width={576}
          height={228}
          priority
        />
        <span className={styles.filmWrapperText}>
          Неувядающий авантюрист и пытливый <br />
          археолог-исследователь по‑прежнему в седле.
        </span>
        <div className={styles.filmWrapperButtons}>
          <button className={styles.filmWrapperButton1}>Смотреть</button>
          <button className={styles.filmWrapperButton2}>О фильме</button>
        </div>
      </section>

      <div className={styles.navWrapper}>
        <div className={styles.buttonsWrapper}>
          {icons.map((icon, index) => (
            <Image
              key={index}
              className={styles.logo}
              src={`/${icon}`}
              alt={`BoxIcon${index + 1}`}
              width={44}
              height={44}
              priority
            />
          ))}
        </div>
        <Image
          className={styles.logo}
          src="/box7.png"
          alt="BoxIcon"
          width={44}
          height={44}
          priority
        />
      </div>
      <section className={styles.novinkiWrapper}>
        <span className={styles.novinkiWrapperText}>Новинки</span>
        <div className={styles.novinkiWrapperCards}>
          <Cards />
        </div>
      </section>
      <section className={styles.topWrapper}>
        <div className={styles.testEgor}>
          <span className={styles.topWrapperText}>ТОП-10 </span>
          <span className={styles.topWrapperTextSimple}>
            просмотров за неделю
          </span>
        </div>

        <div className={styles.topWrapperCards}>
          <TopCards />
        </div>
      </section>
    </main>
  );
}
