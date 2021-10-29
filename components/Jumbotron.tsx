import Image from "next/image"
import styles from "../styles/Jumbotron.module.scss"
import iphone from "../public/iphone.png"

// arrow function

const Jumbotron = () => {
    return (
        <div>
            <div className={styles.backgroundImage}>
                <Image src={iphone} alt="iphone" width="300" height="300"/>
            </div>
            <div className={styles.promotionalMessage}>
                <h3>SHOP</h3>
                <h2>iPhone</h2>
                <p>
                    An <strong>exclusive drop</strong> available.
                </p>
            </div>
        </div>
    )
}

export default Jumbotron
