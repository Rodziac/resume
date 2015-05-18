goog.provide('RESU.Controllers.FinaleController');

goog.require('RESU.Views.Finale');
goog.require('RESU.MVC.Controller');

/**
 * Finale Story Constructor
 * @extends {RESU.MVC.Controller}
 * @override
 * @constructor
 */
RESU.Controllers.FinaleController = function() {

    goog.base(this);

    this.storySlug = "finale";
    this.layoutController = new RESU.Controllers.LayoutController();

};
goog.inherits(RESU.Controllers.FinaleController, RESU.MVC.Controller);

RESU.Controllers.FinaleController.prototype.init = function() {

    this.layoutController.appendStory(
        this.storySlug,
        this.backgroundTemplate,
        this.middleTemplate,
        this.foregroundTemplate,
        this.propsTemplate
    );

    this.eventsHandler();

};

RESU.Controllers.FinaleController.prototype.eventsHandler = function() {

    goog.events.listen(this.globalEvent, "page_scroll", function(e){
        debugger;
    });

};

RESU.Controllers.FinaleController.prototype.backgroundTemplate = RESU.Views.Finale.background;
RESU.Controllers.FinaleController.prototype.middleTemplate = RESU.Views.Finale.middle;
RESU.Controllers.FinaleController.prototype.foregroundTemplate = RESU.Views.Finale.foreground;
RESU.Controllers.FinaleController.prototype.propsTemplate = RESU.Views.Finale.props;
