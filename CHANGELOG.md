# Change Log

All notable changes to the "Lim Code" extension will be documented in this file.

## [1.0.6] - 2025-12-19

### Fixed
- 修复上下文总结功能发送给 API 时包含无效字段的问题（如 `functionCall.rejected`、`inlineData.id/name` 等内部字段）
- 修复 apply_diff 工具前端面板中行号从 0 开始显示的问题，现在正确使用 `start_line` 作为起始行号

### Improved
- 优化总结请求的字段清理，过滤思考内容和思考签名，保持与 `getHistoryForAPI` 一致的清理逻辑
- 改进 apply_diff 工具的"查看差异"按钮功能，现在点击后在 VSCode 中显示完整文件的差异视图（包含完整代码上下文），而不仅仅是 search/replace 块
- 改进切换对话时的自动滚动逻辑
- 前端添加取消兜底机制，避免一直显示等待

## [1.0.5] - 2025-12-19

### Improved
- 优化生图工具（generate_image）描述，添加提示说明生成的图片是实色背景而非透明底图

## [1.0.4] - 2025-12-19

### Fixed
- 修复工具执行完成后点击终止按钮无法正常结束的问题（循环开始时检测取消信号后需发送 cancelled 消息给前端）

### Improved
- 优化搜索工具（find_files、search_in_files）忽略问题，添加默认排除模式配置

## [1.0.3] - 2025-12-19

### Added
- 添加了向 AI 发送诊断信息功能

### Fixed
- 修复上下文感知页面保存问题

### Note
- ⚠️ 旧版本使用者建议重置系统提示词以添加诊断信息功能

## [1.0.0] - 2025-12-19

### Added
- 🎉 首次发布
- AI 编程助手核心功能
- 多模态支持
- 对话历史管理
- 多语言支持（中文、英文、日文）
- MCP 服务器集成
- 文件操作工具
- 终端命令执行
- 图像处理功能