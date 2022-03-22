import {connect} from "react-redux";
import styles from './style.module.scss';
import config from '../../configs/config';

function SiteFooter({}){
    return <footer className={styles.footer}>
        <section className={styles.footerBlock}>
            <a href="">
                <img className={styles.logo} src={config.backendUrl+'/images/logo.svg'} alt={"Smaki.pub Logo"}/>
            </a>
            <nav className={styles.footerMenu}>
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
            </nav>
            <div className={styles.socialBlock}>
                <a href="https://www.facebook.com/smakipublishing"><img src={config.backendUrl+'/icons/Facebook_icon.svg'} alt={"https://www.facebook.com/smakipublishing"}/></a>
                <a href="https://www.instagram.com/smakipublishing/"><img src={config.backendUrl+'/icons/Instagram_icon.svg'} alt={"https://www.instagram.com/smakipublishing/"}/></a>
            </div>
        </section>
        <section className={styles.copyrightBlock}>
            <span>© 2019-2022 COPYRIGHT | ALL RIGHTS RESERVED | DATA LABS UA, LLC</span>
            <div className={styles.payIcons}>
                <img src={config.backendUrl + '/icons/visa.svg'} alt={"visa"}/>
                <img src={config.backendUrl + '/icons/mastercard.svg'} alt={"mastercard"}/>
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