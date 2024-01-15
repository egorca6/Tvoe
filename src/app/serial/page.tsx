import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar/navbar";
import Buttons from "../components/button/buttons";
import { episodes, sameCards } from "../constants";
export default function Serial() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.wrapperFilm}>
          <Image
            className={styles.serialName}
            width={367}
            height={132}
            src="/serial/serialName.png"
            alt="serialName"
          />
          <Image
            className={styles.serialRating}
            width={735}
            height={48}
            src="/serial/tags.png"
            alt="tags"
          />
          <div className={styles.serialText}>
            Уэнсдэй предстоит освоить экстрасенсорные <br />
            cпособности, чтобы остановить местного серийного <br /> убийцу и
            раскрыть тайну родителей.
          </div>
          <Buttons />
        </div>
        <div className={styles.mainImg}>
          <Image
            width={1400}
            height={780}
            src="/serial/imageIMG.png"
            alt="imageIMG"
          />
        </div>
        <section className={styles.seasons}>
          <div className={styles.seasonsNavbar}>
            <div className={styles.seasonsNavbarText}>Сезоны</div>
            <div className={styles.seasonsNavbarButtons}>
              <button className={styles.seasonsNavbarButton}>1</button>
              <button className={styles.seasonsNavbarButton}>2</button>
              <button className={styles.seasonsNavbarButton}>3</button>
            </div>
          </div>
          <div className={styles.seasonsImg}>
            {episodes.map((episode, index) => (
              <div key={index} className={styles.seasonsImgCard}>
                <Image
                  className={styles.logo}
                  src={`${episode.image}`}
                  alt={`BoxIcon`}
                  width={544}
                  height={306}
                  priority
                />
                <div className={styles.seasonsImgCardText1}>
                  {episode.episodeNumber}
                </div>
                <div className={styles.seasonsImgCardText2}>
                  {episode.duration}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.seasonsDescription}>Описание</div>
          <div className={styles.seasonsDescriptionText}>
            Детективная история, наполненная сверхъестественными силами. Главная
            героиня сериала — Уэнздей Аддамс, одна <br />
            из членов семейки Аддамс и единственная дочь Гомеса и Мортиши
            Аддамсов, которая становится студенткой <br />
            академии «Невермор». Она пытается овладеть своими проявившимися
            экстрасенсорными способностями, помешать чудовищным убийствам
            монстра, что терроризирует местный городок Джерико, а также
            разгадать тайну, в которую были втянуты её родители 32 года назад, —
            и всё это на фоне её новых и очень запутанных отношений в академии.
          </div>
          <div className={styles.seasonsDescriptionWarning}>
            <Image
              className={styles.warninglogo}
              src={`/serial/iconAttention.png`}
              alt={`BoxIcon`}
              width={47.62}
              height={48}
              priority
            />
            <div className={styles.seasonsDescriptionWarningText}>
              Контент может содержать сцены курения и употребления спиртных
              напитков. Курение и чрезмерное употребление <br /> алкоголя вредит
              вашему здоровью.
            </div>
          </div>
          <div className={styles.seasonsDescription}>Похожее</div>
          <div className={styles.seasonsRelatedImg}>
            {sameCards.map((sameCard, index) => (
              <Image
                key={index}
                className={styles.logo}
                src={`${sameCard}`}
                alt={`BoxIcon${index + 1}`}
                width={255}
                height={382}
                priority
              />
            ))}
          </div>
          <div className={styles.footerWrapper}>
            <div className={styles.seasonsDescription}>Информация</div>
            <div className={styles.footerTextWrapper}>
              <div className={styles.footerText1}>
                <div className={styles.footerTextGray}>Премьера в мире</div>
                <div className={styles.footerTextWhite}>31 октября 2022</div>
                <div className={styles.footerTextGray}>
                  Оригинальное название
                </div>
                <div className={styles.footerTextWhite}>Wednesday</div>
              </div>
              <div className={styles.footerText2}>
                <div className={styles.footerTextGray}>Страна</div>
                <div className={styles.footerTextWhite}>США</div>
                <div className={styles.footerTextGray}>Жанры</div>
                <div className={styles.footerTextWhite}>
                  Фентези, Комедия, Криминал, Детектив
                </div>
              </div>
              <div className={styles.footerText3}>
                <div className={styles.footerTextGray}>Язык аудиодорожки</div>
                <div className={styles.footerTextWhite}>Rus, Eng</div>
                <div className={styles.footerTextGray}>Качество</div>
                <div className={styles.footerTextWhite}>Full HD</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
