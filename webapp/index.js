sap.ui.define([
    "sap/ui/core/mvc/XMLView"

], function(XMLView) {
    "use strict";

    XMLView.create({
        viewName:"sap.ui.demo.sap.view.App"
    }).then(function (myView) {
        myView.placeAt("content");
    });

});