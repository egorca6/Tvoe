import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export default function Cards() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperCard}>
        <Link href={"/serial"}>
          <Image
            className={styles.wrapperCardImg}
            src="/Card1.png"
            alt="Card1"
            width={398}
            height={597}
            priority
          />

          <div className={styles.text}>Синий жук</div>
        </Link>
      </div>
      <div className={styles.wrapperCard}>
        <Image
          className={styles.wrapperCardImg}
          src="/Card2.png"
          alt="Card2"
          width={398}
          height={597}
          priority
        />
        <div className={styles.text}>Домашняя игра</div>
      </div>
      <div className={styles.wrapperCard}>
        <Image
          className={styles.wrapperCardImg}
          src="/Card3.png"
          alt="Card3"
          width={398}
          height={597}
          priority
        />
        <div className={styles.text}>Салют 7</div>
      </div>
      <div className={styles.wrapperCard}>
        <Image
          className={styles.wrapperCardImg}
          src="/Card4.png"
          alt="Card4"
          width={398}
          height={597}
          priority
        />
        <div className={styles.text}>Поймай меня, если сможешь</div>
      </div>
    </div>
  );
}
