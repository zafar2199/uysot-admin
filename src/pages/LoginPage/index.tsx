import loginPageBg from "@assets/images/loginPagebg.png";
import LoginForm from "./components/LoginForm";

import styles from "./index.module.scss";

const LoginPage = () => {
    return (
        <div className={styles.login}>
            <div className={styles.login__wrapper}>
                <div className={styles.login__left}>
                    <img
                        className={styles.login__img}
                        src={loginPageBg}
                        alt="login page bg"
                    />
                </div>
                <div className={styles.login__right}>
                    <div className={styles.login__content}>
                        <h5 className={styles.login__subtitle}>
                            Xush kelibsiz!
                        </h5>
                        <h1 className={styles.login__title}>Kirish</h1>

                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
