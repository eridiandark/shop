import React, {useState} from "react";
import FormLogin from "../../components/FormLogin";
import FormForgot from "../../components/FormForgot";
import styles from "./styles.module.scss"


export default function LoginPage(){
    const [val, setVal] = useState('login')
    return(
        <div className={styles.loginContainer}>
            {val==='login'?<FormLogin swicher={setVal}/>:<FormForgot swicher={setVal}/>}
        </div>
    )

}