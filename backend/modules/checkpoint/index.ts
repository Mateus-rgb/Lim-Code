/**
 * LimCode - 检查点模块
 *
 * 提供工作区备份和恢复功能
 *
 * 增量备份策略：
 * - 第一次备份：完整备份所有文件
 * - 后续备份：只存储与上一个检查点相比有变化的文件
 * - 恢复时：从基准点开始，依次查找增量链中的文件
 */

export { CheckpointManager } from './CheckpointManager';
export type { CheckpointRecord, FileChange } from './CheckpointManager';