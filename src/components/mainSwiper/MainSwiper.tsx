import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from "swiper";

import 'swiper/css';            
import 'swiper/css/pagination'; 
import clsx from 'clsx';
import { useRef } from 'react';

export const MainSwiper = () => {

    const swiperRef = useRef<SwiperClass | null>(null);

    return (
        <>
            <Swiper 
            pagination={true} 
            className="mySwiper"
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
            <div onClick={() => swiperRef.current?.slidePrev()} className={styles.leftSwitch}>
                <img src="img/leftArrow.svg" alt="" />
            </div>
            <SwiperSlide>
                <div className={clsx(styles.slide,styles.field)}>
                    <div className={styles.box}>
                        <h4 className={styles.title}>Мы лидеры на рынке в своей области! </h4>
                        <p className={styles.text}>Люди могут обещать тебе золотые горы, но пока они не поставят подпись на договоре, это ничего не значит.</p>
                        <button className={styles.btn}>ПОДРОБНЕЕ</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={clsx(styles.slide,styles.tractor)}>
                    <div className={styles.box}>
                        <h4 className={styles.title}>Мы лидеры на рынке в своей области! </h4>
                        <p className={styles.text}>Люди могут обещать тебе золотые горы, но пока они не поставят подпись на договоре, это ничего не значит.</p>
                        <button className={styles.btn}>ПОДРОБНЕЕ</button>
                    </div>
                </div>
            </SwiperSlide>
            <div onClick={() => swiperRef.current?.slideNext()} className={styles.rightSwitch}>
                <img src="img/rightArrow.svg" alt="" />
            </div>
        </Swiper>
        </>
    )
}
