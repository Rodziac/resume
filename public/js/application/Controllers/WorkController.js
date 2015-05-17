goog.provide('RESU.Controllers.WorkController');

goog.require('RESU.Views.Work');

/**
 * Work Story Constructor
 * @extends {RESU.MVC.Controller}
 * @override
 * @constructor
 */
RESU.Controllers.WorkController = function() {

    goog.base(this);

    this.storySlug = "work";
    this.layoutController = new RESU.Controllers.LayoutController();

};
goog.inherits(RESU.Controllers.WorkController, RESU.MVC.Controller);

RESU.Controllers.WorkController.prototype.init = function() {

    this.layoutController.appendStory(
        this.storySlug,
        this.backgroundTemplate,
        this.middleTemplate,
        this.foregroundTemplate,
        this.propsTemplate
    );

    this.eventsHandler();

};

RESU.Controllers.WorkController.prototype.eventsHandler = function() {

};

RESU.Controllers.WorkController.prototype.backgroundTemplate = RESU.Views.Work.background;
RESU.Controllers.WorkController.prototype.middleTemplate = RESU.Views.Work.middle;
RESU.Controllers.WorkController.prototype.foregroundTemplate = RESU.Views.Work.foreground;
RESU.Controllers.WorkController.prototype.propsTemplate = RESU.Views.Work.props;
