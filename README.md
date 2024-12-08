# React + TypeScript + Vite

### svg引入使用

[详见 vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr)

```tsx
// 注意加?react后缀否则不能识别详见：
import Logo from './logo.svg?react';
<Logo />;
```

### css变量引入使用绝对路径

```css
@import url('@/style/themes/index.less');
```

### 使用lodash-es 可以使用treeShaking功能

如果使用lodash 则会把所有的lodash方法都引入进来,增加js体积。
所以在选择第三方库时，要尽可能使用 ESM 版本，可以提升不少性能！
