# 反推结果

## 原始源码是否存在

本机安装目录里只有 Chrome Web Store 发布包，没有 `src/`、`package.json`、TypeScript/Vue 单文件组件或 source map。官方站和商店页面也没有给出公开源码仓库。因此本工程保留原包，并用 `webcrack 2.16.0` 把全部 58 个 JavaScript 构建文件转成可读代码和拆分模块。

## 入口与结构

| 入口 | 原始路径 | 作用 |
|---|---|---|
| MV3 service worker | `serviceworker.js` | 消息、存储、通知、权限、书签和离屏文档协调 |
| 新标签页 | `newtab/index.html` → `newtab/newtab.js` | 快捷方式、壁纸、搜索、组件、设置与账户界面 |
| 工具栏弹窗 | `popup/index.html` → `popup/popup.js` | 快捷入口和设置 |
| 延迟模块 | 根目录 `0.js` 到 `42.js` | Webpack 动态加载的功能块 |
| Chat AI | `chatai/` | 独立 Webpack 前端 |
| 离屏页面 | `off_screen/` | MV3 offscreen 辅助逻辑 |

`manifest.json` 直接声明的新标签替换、service worker、基础权限和可选权限均已保留。原包使用 Webpack；`vendor/vue.min.js` 表明主界面包含 Vue 运行时，部分模块也使用 Web Components/Lit 风格代码。

## 还原边界

- `original/` 是逐文件原样副本，`ORIGINAL_SHA256SUMS.txt` 可核对每个文件。
- `recovered/**/deobfuscated.js` 是每个构建文件的完整可读版。
- 同目录的数字 `.js` 文件是 Webpack 模块拆分结果，`bundle.json` 记录入口模块和映射。
- 没有 source map 时，原始变量名、注释、源码目录、未打包文件和构建配置不能完整恢复；这里是可审计、可继续分析的构建源码，不冒充原始开发仓库。
