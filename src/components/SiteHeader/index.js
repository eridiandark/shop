import {connect} from "react-redux";
import config from '../../configs/config';
import styles from './style.module.scss';
import {Button, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../../assets/images/logo.svg';
import search from '../../assets/icons/search.svg';

function SiteHeader({}){
    return <header className={styles.header}>
        <Navbar  expand="xl">
            <Navbar.Brand><img className={styles.logo} src={logo} alt={"Smaki.pub Logo"}/></Navbar.Brand>
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
                            <img src={search} alt={search}/>
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