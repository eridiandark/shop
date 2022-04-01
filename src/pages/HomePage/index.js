import SiteHeader from "../../components/SiteHeader";
import Test from "../../components/test";
import SiteFooter from "../../components/SiteFooter";
import React from "react";
import styles from "./styles.module.scss";
import SiteCarousel from "../../components/carousel";

export default function HomePage(){
    const images=["https://avatars.mds.yandex.net/i?id=5601a453b3928cea00d17f34db3fd49e-5879281-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=2182886192e50d2a338b02b201f01a03-5484495-images-thumbs&n=13",
    "https://catherineasquithgallery.com/uploads/posts/2021-02/1613244346_104-p-temno-sinii-zimnii-fon-156.jpg",
    "https://avatars.mds.yandex.net/i?id=f0eaa5c7cbb91d3aa6c66451d98df91b-4118326-images-thumbs&n=13"]

    return(
        <div className={styles.pageCon}>
            <SiteHeader />
            <div>
                <Test />
                <SiteCarousel ListUrlImage={images} />
            </div>
            <SiteFooter />
        </div>
    )
}