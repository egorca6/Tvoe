import Image from "next/image";
import styles from "./button.module.css";
export default function Buttons() {
  return (
    <div className={styles.filmWrapperButtons}>
      <button className={styles.filmWrapperButton1}>Смотреть</button>
      <button className={styles.filmWrapperButton2}>Трейлер</button>
      <div className={styles.filmWrapperVector}>
        <Image
          className={styles.test}
          width={21}
          height={26}
          src="/serial/vector.png"
          alt="imageIMG"
        />
      </div>
      <div className={styles.filmWrapperVector}>
        <Image
          className={styles.test}
          width={26}
          height={24}
          src="/serial/vector2.png"
          alt="imageIMG"
        />
      </div>
    </div>
  );
}
