import {Carousel, CarouselItem} from "react-bootstrap";
import styles from "./styles.module.scss";

function SiteCarousel({ListUrlImage=[]}) {
    return <Carousel>

        {ListUrlImage.map((value,index)=><CarouselItem><img className={styles.carItem} src={value}/></CarouselItem>)}

    </Carousel>

}
export default SiteCarousel;
