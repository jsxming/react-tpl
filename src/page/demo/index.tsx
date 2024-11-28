import Progress from '@/components/Progress';
import styles from './index.module.less';
import {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import type {Swiper as SwiperType} from 'swiper';
import 'swiper/css';
function Demo() {
  const [idx, setIdx] = useState(0);
  const list = [10, 20, 40, 60, 70, 100, 300];

  const per = useRef<SwiperType | null>(null);
  useEffect(() => {
    per?.current?.slideTo(idx);
  }, [idx]);
  return (
    <div>
      <div className={styles.sbox}>
        <Swiper
          onSwiper={swiper => (per.current = swiper)}
          spaceBetween={50}
          centeredSlides
          slidesPerView={3}
          onSlideChange={v => {
            setIdx(v.activeIndex);
          }}>
          {list.map(item => {
            return (
              <SwiperSlide className={'swiper-slide'} key={item}>
                <div>Slide {item}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className={styles.box}>
        <Progress value={25} index={idx} list={list} />
      </div>
      <button
        onClick={() => {
          setIdx(oldV => {
            return oldV + 1;
          });
        }}>
        left
      </button>
      <button
        onClick={() => {
          setIdx(oldV => {
            return oldV - 1;
          });
        }}>
        right
      </button>
    </div>
  );
}
export default Demo;
