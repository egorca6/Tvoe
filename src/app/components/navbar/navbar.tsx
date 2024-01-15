import Image from "next/image";
import styles from "./navbar.module.css";
import { icons } from "@/app/constants";
export default function Navbar() {
  return (
    <aside className={styles.aside}>
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
    </aside>
  );
}
