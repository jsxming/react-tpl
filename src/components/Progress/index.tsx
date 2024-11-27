import {useEffect, useRef, useState} from 'react';
import styles from './index.module.less';
function Progress() {
  const list = [10, 20, 40, 60, 70, 100, 300];
  const value = 100;
  const el = useRef<null | HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [valueWidth, setValueWidth] = useState(0);

  useEffect(() => {
    const r = (el.current?.clientWidth || 0) / 4;
    setWidth(r);

    if (value <= list[0]) {
      const d = (value / list[0]) * r + 30;
      console.log(d, '-----------dd-----------------------');
      setValueWidth(d);
      return;
    }
    console.log(r);
    const idx = list.findIndex(item => item >= value);
    /** 30 元素自身宽度 */
    const aa = list[idx] - value;
    const bb = list[idx] - list[idx - 1];
    const c = (1 - aa / bb) * r;
    const valueWidth = idx * r + 30 + c;
    setValueWidth(valueWidth);
    console.log(idx, list[idx], idx, aa, bb, c, '------------diff----------------------');
  }, []);
  return (
    <div className={styles.progress} ref={el}>
      <div className={styles.progressValue} style={{width: valueWidth + 'px'}}></div>
      <div className={styles.progressStep}>
        {list.map((item, index) => {
          return (
            <div key={item} style={{left: (index + 1) * width + 'px'}}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Progress;
