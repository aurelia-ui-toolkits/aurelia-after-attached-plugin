'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaTaskQueue = require('aurelia-task-queue');

function configure(aurelia) {
  var taskQueue = aurelia.container.get(_aureliaTaskQueue.TaskQueue);

  var attached = _aureliaTemplating.View.prototype.attached;
  _aureliaTemplating.View.prototype.attached = function () {
    var _this = this;

    var isAttached = this.isAttached;
    attached.call(this);

    if (!isAttached) {
      if (this.controller !== null && this.controller.viewModel.afterAttached) {
        taskQueue.queueTask(function () {
          return _this.controller.viewModel.afterAttached();
        });
      }
    }
  };
}