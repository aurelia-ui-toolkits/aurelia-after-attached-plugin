import { Controller } from 'aurelia-templating';
import { TaskQueue } from 'aurelia-task-queue';

export function configure(aurelia) {
  let taskQueue = aurelia.container.get(TaskQueue);

  var attached = Controller.prototype.attached;
  Controller.prototype.attached = function () {
    let isAttached = this.isAttached;
    attached.call(this);

    if (!isAttached) {
      if (this.viewModel && this.viewModel.afterAttached) {
        taskQueue.queueTask(() => this.viewModel.afterAttached());
      }
    }
  };
}