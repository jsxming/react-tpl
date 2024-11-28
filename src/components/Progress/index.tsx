import {useEffect, useRef, useState} from 'react';
import styles from './index.module.less';

type Props = {
  index: number;
  /** 默认显示几个 */
  defaultShowCount?: number;
  /** 进度条的值 */
  value: number;
  list: number[];
};
const defaultList = [10, 20, 40, 60, 70, 100, 300];
function Progress({index, list = defaultList, value = 20, defaultShowCount = 2}: Props) {
  // const list = [10, 20, 40];
  const listLen = list.length;
  const el = useRef<null | HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [valueWidth, setValueWidth] = useState(0);
  const showCount = Math.min(defaultShowCount + 1, listLen);

  useEffect(() => {
    const r = (el.current?.clientWidth || 0) / showCount;
    setWidth(r);

    if (value <= list[0]) {
      const d = (value / list[0]) * r;
      setValueWidth(d);
      return;
    }
    const idx = list.findIndex(item => item >= value);
    const aa = list[idx] - value;
    const bb = list[idx] - list[idx - 1];
    const c = (1 - aa / bb) * r;
    const valueWidth = idx * r + c;
    setValueWidth(valueWidth);
  }, []);

  const offset = {
    transform: `translateX(-${index * width}px)`,
  };
  return (
    <div className={styles.progress} ref={el}>
      <div
        className={styles.progressBg}
        style={{
          ...offset,
          width: listLen * width,
        }}></div>
      <div className={styles.progressValue} style={{...offset, width: valueWidth + 'px'}}></div>
      <div className={styles.progressStep}>
        {list.map((item, k) => {
          return (
            <div
              key={item}
              style={{
                /** 30 元素自身宽度 */
                transform: `translate(-${index * width}px,-50%)`,
                left: (k + 1) * width - 30 + 'px',
              }}>
              <div className={styles.text}>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Progress;
