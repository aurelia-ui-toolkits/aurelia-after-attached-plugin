define(['exports', './aurelia-after-attached-plugin'], function (exports, _aureliaAfterAttachedPlugin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaAfterAttachedPlugin).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaAfterAttachedPlugin[key];
      }
    });
  });
});