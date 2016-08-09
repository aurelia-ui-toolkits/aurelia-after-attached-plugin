'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaAfterAttachedPlugin = require('./aurelia-after-attached-plugin');

Object.keys(_aureliaAfterAttachedPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaAfterAttachedPlugin[key];
    }
  });
});