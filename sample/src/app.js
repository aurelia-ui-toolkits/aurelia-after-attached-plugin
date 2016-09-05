export class App {
  objs = [{},{},{}];
  
  attached() {
    this.message = 'attached';
  }
  
  afterAttached() {
      this.message += ', afterattached';
  }
}
