'use strict';

System.register(['aurelia-templating', 'aurelia-task-queue'], function (_export, _context) {
  "use strict";

  var View, TaskQueue;
  function configure(aurelia) {
    var taskQueue = aurelia.container.get(TaskQueue);

    var attached = View.prototype.attached;
    View.prototype.attached = function () {
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

  _export('configure', configure);

  return {
    setters: [function (_aureliaTemplating) {
      View = _aureliaTemplating.View;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }],
    execute: function () {}
  };
});