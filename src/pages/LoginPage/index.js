import React, {useState} from "react";
import FormLogin from "../../components/FormLogin";


export default function LoginPage(){
    const [val, setVal] = useState('login')
    return(
        <div>
            {val==='login'?<FormLogin swicher={setVal}/>:<h1>forgot form</h1>}
        </div>
    )

}