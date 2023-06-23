import LogoImg from "@assets/images/logo.png";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className={styles.logo}>
            <img className={styles.logo__img} src={LogoImg} alt="logo" />
            <span className={styles.logo__purple}>UYSOT</span>
            <span className={styles.logo__yellow}>DASHBOARD</span>
        </Link>
    );
};

export default Logo;
