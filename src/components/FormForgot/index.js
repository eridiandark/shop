import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import styles from "./styles.module.scss"


function FormForgot({swicher}) {
    return <Form className={styles.forgotForm}>

        <FormLabel>Email</FormLabel>
        <FormControl type={"email"} placeholder="Введiть email"/>
        <span className={styles.spanBack} onClick={()=>swicher('login')}>Назад</span>
        <Button type="submit">Вiдiслати</Button>
    </Form>
}

export default FormForgot;