import SiteHeader from "../../components/SiteHeader";
import Test from "../../components/test";
import SiteFooter from "../../components/SiteFooter";
import React from "react";
import styles from "./styles.module.scss";

export default function HomePage(){
    return(
        <div className={styles.pageCon}>
            <div>
                <SiteHeader />
                <Test />
            </div>
            <SiteFooter />
        </div>
    )
}