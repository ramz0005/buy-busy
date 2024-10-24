import styles from "./SignUp.module.css";
import { useAuthValue } from "../../AuthContext";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    const nameRef = useRef()
    const emailRef = useRef();
    const passwordRef = useRef();

    const {createUser} = useAuthValue();
    

    const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault();

        const data = {
            name: nameRef.current.value,
            email:emailRef.current.value,
            password: passwordRef.current.value
        };

        createUser(data)
        navigate("/signin");
    }

    return (
        <>
            <div className={styles.registerPageContainer}>
                <form className={styles.registrationForm}>
                    <h2 className={styles.registerPageTitle}>Sign Up</h2>
                    <input type="text" name="name" ref={nameRef} placeholder="Enter Name" className={styles.registerInput}></input>
                    <input type="email" name="email" ref={emailRef} className={styles.registerInput} placeholder="Enter Email"></input>
                    <input type="password" name="password" ref={passwordRef} className={styles.registerInput} placeholder="Enter Password"></input>
                    <button className={styles.registerBtn} onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
        </>
    )
}