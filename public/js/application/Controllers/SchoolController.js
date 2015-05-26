goog.provide('RESU.Controllers.SchoolController');

goog.require('RESU.Views.School');
goog.require('RESU.MVC.Controller');

/**
 * School Story Constructor
 * @extends {RESU.MVC.Controller}
 * @override
 * @constructor
 */
RESU.Controllers.SchoolController = function() {

    goog.base(this);

    this.storySlug = "school";
    this.layoutController = new RESU.Controllers.LayoutController();

};
goog.inherits(RESU.Controllers.SchoolController, RESU.MVC.Controller);

RESU.Controllers.SchoolController.prototype.init = function() {

    this.layoutController.appendStory(
        this.storySlug,
        this.backgroundTemplate,
        this.middleTemplate,
        this.foregroundTemplate,
        this.propsTemplate
    );

    this.eventsHandler();

};

RESU.Controllers.SchoolController.prototype.eventsHandler = function() {

    goog.events.listen(this.globalEvent, "page_scroll", function(e){

    });

};

RESU.Controllers.SchoolController.prototype.backgroundTemplate = RESU.Views.School.background;
RESU.Controllers.SchoolController.prototype.middleTemplate = RESU.Views.School.middle;
RESU.Controllers.SchoolController.prototype.foregroundTemplate = RESU.Views.School.foreground;
RESU.Controllers.SchoolController.prototype.propsTemplate = RESU.Views.School.props;
