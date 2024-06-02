import styles from './page.module.scss'
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>@2024 Jerry write first Next.js</div>
            <div className={styles.social}>
                <Image className={styles.icon} src='/github.svg' width={15} height={15} alt="Github_icon" />
                <Image className={styles.icon} src='/csdn.png' width={15} height={15} alt="Github_icon" />
                <Image className={styles.icon} src='/github.svg' width={15} height={15} alt="Github_icon" />
                <Image className={styles.icon} src='/github.svg' width={15} height={15} alt="Github_icon" />
            </div>
        </div>
    )
}

export default Footer