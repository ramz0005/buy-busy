import styles from "./SignIn.module.css";
import { useRef } from "react";
import { useAuthValue } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignIn() {

  const passwordRef = useRef();
  const emailRef = useRef();
  const {signIn} = useAuthValue();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email:emailRef.current.value,
      password: passwordRef.current.value
    }

    const status = signIn(data);

    if(status){
      navigate("/");
    }
    else{
      navigate("/signin");
    }

  }

  return (
    <>
      <div className={styles.loginPageContainer}>
        <form className={styles.loginForm}>
          <h2 className={styles.LoginPageTitle}>Sign In</h2>
          <input
            type="email"
            name="email"
            ref={emailRef}
            className={styles.loginInput}
            placeholder="Enter Email"
          ></input>
          <input
            type="password"
            name="password"
            ref={passwordRef}
            className={styles.loginInput}
            placeholder="Enter Password"
          ></input>
          <button className={styles.loginBtn} onClick={handleSubmit}>Sign In</button>
          <a
            href="/signup"
            style={{
              textDecoration: "none",
              color: "rgb(34, 73, 87)",
              fontFamily: "Quicksand",
            }}
          >
            <p style={{ fontWeight: 600, margin: "0px" }}>Or SignUp instead</p>
          </a>
        </form>
      </div>
    </>
  );
}
