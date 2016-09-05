'use strict';

System.register(['aurelia-templating', 'aurelia-task-queue'], function (_export, _context) {
  "use strict";

  var Controller, TaskQueue;
  function configure(aurelia) {
    var taskQueue = aurelia.container.get(TaskQueue);

    var attached = Controller.prototype.attached;
    Controller.prototype.attached = function () {
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

  _export('configure', configure);

  return {
    setters: [function (_aureliaTemplating) {
      Controller = _aureliaTemplating.Controller;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }],
    execute: function () {}
  };
});