export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-after-attached-plugin');

  aurelia.start()
  .then(au => au.setRoot('app'));
}
