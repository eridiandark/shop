import React from "react";
import styles from "./styles.module.scss";

export default function AdminPage(){
    return (
        <div className={styles.adminPageCon}>
            <aside className={styles.adminSidebar}>
                <div className={styles.adminSidebarItem}>Pages</div>
                <div className={styles.adminSidebarItem}>Blog</div>
                <div className={styles.adminSidebarItem}>Products</div>
                <div className={styles.adminSidebarItem}>Orders</div>
            </aside>
        </div>
    )
}