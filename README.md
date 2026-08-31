# OpenTab

作者：`jimmyu725`

OpenTab 是从本机 Chrome 已安装包整理出的新标签页扩展开发工程。

- `original/`：逐文件保留的原始商店构建包。
- `extension/`：名称和作者已改为 OpenTab / jimmyu725 的开发者模式副本。
- `recovered/`：对 58 个 JavaScript 构建文件进行反混淆、反压缩和模块拆分后的可读分析视图。
- `ORIGINAL_SHA256SUMS.txt`：原始包逐文件 SHA-256。
- `RECOVERY_INDEX.json`：每个构建文件的还原结果、输出路径和状态。
- `ROLLBACK.sh`：把副本的 `manifest.json` 恢复成商店原始版本。

这里能还原的是“可读的构建源码”，不是开发者最初的 TypeScript/Vue 工程；原始变量名、目录结构、注释和未发布源码无法从无 source map 的发布包中完整恢复。
