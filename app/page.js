import Image from "next/image";
import styles from "./page.module.css";
import imgQrCode from "@/qr-code-component-main/images/image-qr-code.png"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.component}>
        <Image
          className={styles.img}
          src={imgQrCode}
        />
        <h2 className={styles.title}>Improve your front-end skills by building projects</h2>
        <p className={styles.description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </main>
  );
}
