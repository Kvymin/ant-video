(function () {
  // Node 服务型小程序不在页面内承载业务，但仍注册遥控事件，避免 TV WebView 丢失焦点事件。
  if (window.ant && window.ant.tv && typeof window.ant.tv.onKey === 'function') {
    window.ant.tv.onKey(function () {
      return false;
    });
  }
})();
