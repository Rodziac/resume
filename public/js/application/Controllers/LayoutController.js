goog.provide('RESU.Controllers.LayoutController');

goog.require('RESU.Views.Layout');

/**
 * Layout Constructor
 * @extends {RESU.MVC.Controller}
 * @override
 * @constructor
 */
RESU.Controllers.LayoutController = function() {

    goog.base(this);

};
goog.inherits(RESU.Controllers.LayoutController, RESU.MVC.Controller);

RESU.Controllers.LayoutController.prototype.init = function() {

    var pageContainer = goog.dom.getElement("mainWrapper");

    this.render(this.layoutTemplate, {}, pageContainer);

};

RESU.Controllers.LayoutController.prototype.appendStory = function(slug, background, middle, foreground, props) {

    var backgroundHTML = this.getHtmlWithParams(background, {});
    var middleHTML = this.getHtmlWithParams(middle, {});
    var foregroundHTML = this.getHtmlWithParams(foreground, {});
    var propsHTML = this.getHtmlWithParams(props, {});

    var templateObject = {
        slug: slug,
        background: backgroundHTML,
        middle: middleHTML,
        foreground: foregroundHTML,
        props: propsHTML
    };

    var storyContainer = goog.dom.getElement("storyContainer");

    this.renderAppend(this.bundleTemplate, templateObject, storyContainer);

};

RESU.Controllers.LayoutController.prototype.layoutTemplate = RESU.Views.Layout.mainLayout;
RESU.Controllers.LayoutController.prototype.bundleTemplate = RESU.Views.Layout.storyLayout;
