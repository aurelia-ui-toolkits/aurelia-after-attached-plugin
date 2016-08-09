### aurelia-after-attached-plugin

This plugin adds an "afterAttached" lifecycle callback to the View. The afterAttached callback is called after all child components are attached, and after all two-way bindings have completed.

- constructor()
- created()
- bind()
- attached()
- **afterAttached()**
- detached()
- unbind()

Usage:

```diff
// main.js
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
+   .plugin('aurelia-after-attached-plugin');

  aurelia.start()
  .then(au => au.setRoot('app'));
}
```

```
// some view-model
export class MyPage {
  afterAttached() {

  }
}