goog.provide('RESU.Controllers.LayoutController');

goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.fx.easing');
goog.require('RESU.Views.Layout');
goog.require('RESU.MVC.Controller');

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

    this.bindEvents();

    window.scrollTo(0, 0);

};

RESU.Controllers.LayoutController.prototype.bindEvents = function() {

    var that = this;

    goog.events.listen(this.globalEvent, "page_scroll", function(e){

        that.scrollEvent();

    });

    goog.events.listen(window, goog.events.EventType.LOAD, function(e){

        var scroller = new goog.fx.dom.Scroll(window.document.body, [1, 1], [0, 0], 1);
        scroller.play();

    });

};

RESU.Controllers.LayoutController.prototype.scrollEvent = function() {

    var that = this;

    goog.events.listen(this.globalEvent, "page_scroll", function(e){

        var scroller = new goog.fx.dom.Scroll(
            window.document.body,
            [
                window.document.body.scrollLeft,
                0
            ],
            [
                e.position * 50,
                0
            ],
            500,
            goog.fx.easing.easeOut
        );
        scroller.play();

    });

    goog.events.listen(window, goog.events.EventType.LOAD, function(e){

        var scroller = new goog.fx.dom.Scroll(window.document.body, [1, 1], [0, 0], 1);
        scroller.play();

    });

};

RESU.Controllers.LayoutController.prototype.appendStory = function(slug, background, middle, foreground, props) {

    var backgroundContainer = goog.dom.getElement("backgrounds");
    var middleContainer = goog.dom.getElement("middles");
    var foregroundContainer = goog.dom.getElement("foregrounds");
    var propsContainer = goog.dom.getElement("props");

    this.renderAppend(background, {className: slug}, backgroundContainer);
    this.renderAppend(middle, {className: slug}, middleContainer);
    this.renderAppend(foreground, {className: slug}, foregroundContainer);
    this.renderAppend(props, {className: slug}, propsContainer);

};

RESU.Controllers.LayoutController.prototype.layoutTemplate = RESU.Views.Layout.mainLayout;
