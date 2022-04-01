import {Carousel, CarouselItem} from "react-bootstrap";
import styles from "./style.module.scss";

function SiteCarousel({ListUrlImage=[]}) {
    return <Carousel>

        {ListUrlImage.map((value,index)=><CarouselItem><img className={styles.car_it} src={value}/></CarouselItem>)}

    </Carousel>

}
export default SiteCarousel;