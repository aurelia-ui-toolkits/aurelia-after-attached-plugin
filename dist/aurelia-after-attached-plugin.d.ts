import {
  View,
  Controller
} from 'aurelia-templating';
import {
  TaskQueue
} from 'aurelia-task-queue';

// export function configure(aurelia) {
//   let taskQueue = aurelia.container.get(TaskQueue);
//   // intercept attached() calls of the View so we can call afterAttached() afterwards
//   var attached = View.prototype.attached;
//   View.prototype.attached = function() {
//     // attached() gets called twice but only does things when isAttached is false
//     let isAttached = this.isAttached;
//     attached.call(this);
//     // call afterAttached() only if the View has not been attached before
//     if (!isAttached) {
//       if (this.bindingContext && this.bindingContext.afterAttached) {
//         // call afterAttached() via the taskqueue, so any two-way bindings have been completed
//         taskQueue.queueTask(() => this.bindingContext.afterAttached());
//       }
//     }
//   }
// }
export declare function configure(aurelia?: any): any;