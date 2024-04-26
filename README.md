# 前端全栈开发框架

## 相关框架/组件
- [react18](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/): 类型声明
- [vite5](https://cn.vitejs.dev/): 构建工具
- [tailwindcss](https://tailwindcss.com/): 原子化 css
- [shadcn](https://ui.shadcn.com/): 基于 tailwindcss 的无组件 UI 库
- [icon-pack](https://iconpark.oceanengine.com/official)：图表库
- [react-router-dom](https://reactrouter.com/en/main): 路由
- [axios](https://axios-http.com/docs/intro): 网络请求
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction): 轻量级的状态管理

# 特色
1. 采用了前端规范化相关技术，例如：stylelint, eslint, prettier, commitlint并采用 husky 进行校验
2. 支持前端国际化，使用 react-i18next 作为前端国际化方案，并使用 [bbt](https://github.com/wakeadmin/bbt-tools)自动化翻译，你可以在该项目中，只关心中文，其他语言交给bbt 框架去自动翻译，该框架使用简单，无需有任何的学习负担，具体可查阅项目文档
3. 支持主题明暗的切换，已在 `main.tsx` 中引入，你只需要专注编写你的样式类，在需要切换的时候，使用`import { useTheme } from '@/components/ThemeProvider'` 或者在`localStorage`设置`theme`值即可，具体可查看`src/components/ThemeProvider/`组件的源代码

## 如何运行
使用 pnpm 包进行管理
```bash
npm install pnpm -g
pnpm install
```

## 后端
采用 [nestjs](https://docs.nestjs.com/)作为后端框架，正在开发中，支持的特色如下

- 用户鉴权
- TypeOrm集成的数据库操作
- 统一的响应封装
- 日志系统
- ...