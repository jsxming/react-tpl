# React + TypeScript + Vite

### svg引入使用

[详见 vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr)

```tsx
// 注意加?react后缀否则不能识别详见：
import Logo from './logo.svg?react';
<Logo />;
```
