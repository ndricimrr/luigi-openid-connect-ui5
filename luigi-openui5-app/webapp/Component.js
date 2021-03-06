sap.ui.define(['sap/ui/core/UIComponent'], function (UIComponent) {
  return UIComponent.extend('luigi.demo.Component', {
    metadata: {
      manifest: 'json'
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      this.getRouter().initialize();
    }
  });
});
