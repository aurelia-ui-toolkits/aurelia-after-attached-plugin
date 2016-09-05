import { View, Controller } from 'aurelia-templating';
import { TaskQueue } from 'aurelia-task-queue';

export function configure(aurelia) {
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