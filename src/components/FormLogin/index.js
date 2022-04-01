import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";


function FormLogin({swicher}){
    return <Form>
        <FormGroup className={"mb-3"}>
            <FormLabel>Логiн</FormLabel>
            <FormControl placeholder="Введiть логiн" />
        </FormGroup>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введiть пароль" />
        </Form.Group>
        <a onClick={()=>swicher('forgot')}>Забули пароль</a>
        <Button type="submit">Вiдiслати</Button>
    </Form>
}
export default FormLogin;