import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import styles from "./styles.module.scss"

function FormLogin({swicher}){
    return   <Form className={styles.loginForm}>
        <h4 className={styles.loginH4}>Вхiд</h4>
        {/*<FormGroup className={styles.form_group} controlId="formBasicEmail">*/}
        <FormLabel className={styles.loginLabel}>Email</FormLabel>
        <FormControl type={"email"} placeholder="Введiть email" />
        {/*</FormGroup>
        <Form.Group className={styles.form_group} controlId="formBasicPassword">*/}
        <Form.Label className={styles.loginLabel}>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Введiть пароль" />
        {/*</Form.Group>*/}
        <span className={styles.spanLinkPassword} onClick={()=>swicher('forgot')}>Забули пароль</span>
        <Button type="submit">Увiйти</Button>
    </Form>


}
export default FormLogin;