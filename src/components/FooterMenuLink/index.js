import styles from "./styles.module.scss";

function FooterMenuLink({menuData = [], menuHeader}) {
    return <nav className={styles.footerMenu}>
        <h5>{menuHeader}</h5>
        {menuData.map(((value, index) => <a href={value.href}>{value.label}</a>))}
    </nav>
}

export default FooterMenuLink;