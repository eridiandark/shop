import {connect} from "react-redux";
import styles from './style.module.scss';
import config from '../../configs/config';
import logo from '../../assets/images/logo.svg';
import visa from '../../assets/icons/visa.svg';
import mastercard from '../../assets/icons/mastercard.svg';
import facebook from "../../assets/icons/Facebook_icon.svg";
import instagram from "../../assets/icons/Instagram_icon.svg";
import FooterMenuLink from "../FooterMenuLink";

function SiteFooter({}){
    const menu1=[
        {href:"", label:"Книги"},
        {href: "", label: "Про нас"},
        {href: "", label: "Контакти"},
        {href: "", label: "Вакансії"}
    ]

    const menu2=[
        {href:"", label:"Оплата"},
        {href: "", label: "Доставка"},
        {href: "", label: "Блог"}
    ]

    const menu3=[
        {href:"tel: +380676777540", label:"+380 67 677 75 40"},
        {href: "tel: +380673249588", label: "+38 067 324 95 88 (оптовий продаж)"},
        {href: "mailto: info@smaki.pub", label: "info@smaki.pub"}
    ]

    return <footer className={styles.footer}>
        <section className={styles.footerBlock}>
            <a href="">
                <img className={styles.logo} src={logo} alt={"Smaki.pub Logo"}/>
            </a>
            {/*<nav className={styles.footerMenu}>
                <h5>ВИДАВНИЦТВО</h5>
                <a href={""}>Книги</a>
                <a href={""}>Про нас</a>
                <a href={""}>Контакти</a>
                <a href={""}>Вакансії</a>
            </nav>
            <nav className={styles.footerMenu}>
                <h5>КЛІЄНТАМ</h5>
                <a href={""}>Оплата</a>
                <a href={""}>Доставка</a>
                <a href={""}>Блог</a>
            </nav>
            <nav className={styles.footerMenu}>
                <h5>КОНТАКТИ</h5>
                <a href="tel: +380676777540">+380 67 677 75 40</a>
                <a href="tel: +380673249588">+38 067 324 95 88 (оптовий продаж)</a>
                <a href="mailto: info@smaki.pub">info@smaki.pub</a>
            </nav>*/}
            <FooterMenuLink menuData={menu1} menuHeader={"ВИДАВНИЦТВО"}/>
            <FooterMenuLink menuData={menu2} menuHeader={"КЛІЄНТАМ"}/>
            <FooterMenuLink menuData={menu3} menuHeader={"КОНТАКТИ"}/>
            <div className={styles.socialBlock}>
                <a href="https://www.facebook.com/smakipublishing"><img src={facebook} alt={"https://www.facebook.com/smakipublishing"}/></a>
                <a href="https://www.instagram.com/smakipublishing/"><img src={instagram} alt={"https://www.instagram.com/smakipublishing/"}/></a>
            </div>
        </section>
        <section className={styles.copyrightBlock}>
            <span>© 2019-2022 COPYRIGHT | ALL RIGHTS RESERVED | DATA LABS UA, LLC</span>
            <div className={styles.payIcons}>
                <img src={visa} alt={"visa"}/>
                <img src={mastercard} alt={"mastercard"}/>
            </div>
        </section>
    </footer>
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteFooter)