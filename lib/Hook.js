/**
 * 公共钩子
 */
const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook
} = require('tapable')

class Hook {
  constructor () {
    this.hooks = {
      createCompiler: new SyncHook(),
      analyzeDependency: new SyncHook()
    }
  }
}

module.exports = Hook
