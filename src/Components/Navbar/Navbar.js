import styles from "./Navbar.module.css";
import homeIcon from "../../Assets/home.png";
import signInIcon from "../../Assets/signIn.png";
import { Outlet } from "react-router-dom";
import { useAuthValue } from "../../AuthContext";

export default function Navbar() {

    const {isLoggedIn, signOut} = useAuthValue();

    return (
        <>
            <header>
                <nav className={styles.navbar} style={{ justifyContent: 'space-evenly', boxShadow: 'rgba(17, 17, 26, 0.05) 0px 15px 20px' }}>
                    <div className={styles.navbarContainer}>
                        <a aria-current="page" className={`${styles.navbarLogo} ${styles.active}`} href="/">Buy Busy</a>
                        <ul className={styles.navMenu}>
                            <li className={`${styles.navItem} ${styles.active}`}>
                                <a className={styles.navLinks} href="/"><span><img className={styles.iconStyles} src={homeIcon} alt="Home" /></span> Home</a>
                            </li>
                            <li className={isLoggedIn?styles.navItem:styles.notActive}>
                                <a  className={styles.navLinks} href="/myOrders"><span><img className={styles.iconStyles} src={require("../../Assets/orders.png")} alt="MyOrder"></img></span> My orders</a>
                            </li>
                            <li className={isLoggedIn?styles.navItem:styles.notActive}>
                                <a  className={styles.navLinks} href="/cart"><span><img className={styles.iconStyles} src={require("../../Assets/cart.png")} alt="Cart"></img></span> Cart</a>
                            </li>
                            {!isLoggedIn?(
                                <li className={styles.navItem}>
                                <a className={styles.navLinks} href="/signin"><span><img className={styles.iconStyles} src={signInIcon} alt="Signin" /></span> SignIn</a>
                            </li>
                            ):(
                                <li className={styles.navItem}>
                                <span className={styles.navLinks} onClick={signOut}><img className={styles.iconStyles} src={require("../../Assets/signOut.png")} alt="SignOut"/> Sign Out</span>
                            </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
}
