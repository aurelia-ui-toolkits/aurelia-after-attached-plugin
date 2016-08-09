import { View } from 'aurelia-templating';
import { TaskQueue } from 'aurelia-task-queue';

export function configure(aurelia) {
  let taskQueue = aurelia.container.get(TaskQueue);

  var attached = View.prototype.attached;
  View.prototype.attached = function () {
    let isAttached = this.isAttached;
    attached.call(this);

    if (!isAttached) {
      if (this.controller !== null && this.controller.viewModel.afterAttached) {
        taskQueue.queueTask(() => this.controller.viewModel.afterAttached());
      }
    }
  };
}