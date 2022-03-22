import {connect} from "react-redux";
import config from '../../configs/config';
import styles from './style.module.scss';
import {Button, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown} from "react-bootstrap";

function SiteHeader({}){
    return <header className={styles.header}>
        <Navbar  expand="xl">
            <Navbar.Brand><img className={styles.logo} src={config.backendUrl+'/images/logo.svg'} alt={"Smaki.pub Logo"}/></Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className={"justify-content-between"}>
                <Nav className={"text-uppercase text-nowrap"}>
                    <NavDropdown title={"Книги"}>
                        <NavDropdown.Item href="">Всi книги</NavDropdown.Item>
                        <NavDropdown.Item href="">  В наявностi</NavDropdown.Item>
                        <NavDropdown.Item href="">  Передзамовлення</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="">Книгарні</Nav.Link>
                    <Nav.Link href="">Доставка</Nav.Link>
                    <Nav.Link href="">Оплата</Nav.Link>
                    <Nav.Link href="">Про нас</Nav.Link>
                    <Nav.Link href="">Контакти</Nav.Link>
                    <Nav.Link href="">Вакансії</Nav.Link>
                    <Nav.Link href="">Блог</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <InputGroup>
                        <FormControl
                            type="search"
                            placeholder="Пошук по каталогу"
                            className=""
                            aria-label="Search"
                        />
                        <Button variant="light" className={"border-dark"}>
                            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        </Button>
                    </InputGroup>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </header>
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader)