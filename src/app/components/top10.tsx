import Image from "next/image";
import styles from "./top10.module.css";

export default function TopCards() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperCard}>
        <div className={styles.wrapperCardText}>1</div>
        <Image
          className={styles.wrapperCardImg}
          src="/IMG1.png"
          alt="Card1"
          width={398}
          height={597}
          priority
        />
      </div>
      <div className={styles.wrapperCard}>
        <div className={styles.wrapperCardText}>2</div>
        <Image
          className={styles.wrapperCardImg}
          src="/IMG2.png"
          alt="Card2"
          width={398}
          height={597}
          priority
        />
      </div>
      <div className={styles.wrapperCard}>
        <div className={styles.wrapperCardText}>3</div>
        <Image
          className={styles.wrapperCardImg}
          src="/IMG3_5.png"
          alt="Card3"
          width={228}
          height={597}
          priority
        />
      </div>
    </div>
  );
}
