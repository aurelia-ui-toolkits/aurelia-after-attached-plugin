define(['exports', 'aurelia-templating', 'aurelia-task-queue'], function (exports, _aureliaTemplating, _aureliaTaskQueue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia) {
    var taskQueue = aurelia.container.get(_aureliaTaskQueue.TaskQueue);

    var attached = _aureliaTemplating.Controller.prototype.attached;
    _aureliaTemplating.Controller.prototype.attached = function () {
      var _this = this;

      var isAttached = this.isAttached;
      attached.call(this);

      if (!isAttached) {
        if (this.viewModel && this.viewModel.afterAttached) {
          taskQueue.queueTask(function () {
            return _this.viewModel.afterAttached();
          });
        }
      }
    };
  }
});