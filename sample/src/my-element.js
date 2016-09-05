export class MyElement {
  attached() {
    this.message = 'attached';
  }
  
  afterAttached() {
      this.message += ', afterattached';
  }
}