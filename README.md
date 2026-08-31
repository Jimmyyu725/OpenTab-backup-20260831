# Infinity New Tab Pro 11.0.41 还原工程

- `original/`：从本机 Chrome 已安装目录逐文件复制的原始商店构建包。
- `extension/`：可供开发者模式加载的副本；仅修改扩展显示名并移除商店固定 ID/自动更新字段，避免与已安装版本冲突。
- `recovered/`：对 58 个 JavaScript 构建文件进行反混淆、反压缩和模块拆分后的可读分析视图。
- `ORIGINAL_SHA256SUMS.txt`：原始包逐文件 SHA-256。
- `RECOVERY_INDEX.json`：每个构建文件的还原结果、输出路径和状态。
- `ROLLBACK.sh`：把副本的 `manifest.json` 恢复成商店原始版本。

这里能还原的是“可读的构建源码”，不是开发者最初的 TypeScript/Vue 工程；原始变量名、目录结构、注释和未发布源码无法从无 source map 的发布包中完整恢复。
