goog.provide('RESU.Controllers.ProjectsController');

goog.require('RESU.Views.Projects');
goog.require('RESU.MVC.Controller');

/**
 * Projects Story Constructor
 * @extends {RESU.MVC.Controller}
 * @override
 * @constructor
 */
RESU.Controllers.ProjectsController = function() {

    goog.base(this);

    this.storySlug = "projects";
    this.layoutController = new RESU.Controllers.LayoutController();

};
goog.inherits(RESU.Controllers.ProjectsController, RESU.MVC.Controller);

RESU.Controllers.ProjectsController.prototype.init = function() {

    this.layoutController.appendStory(
        this.storySlug,
        this.backgroundTemplate,
        this.middleTemplate,
        this.foregroundTemplate,
        this.propsTemplate
    );

    this.eventsHandler();

};

RESU.Controllers.ProjectsController.prototype.eventsHandler = function() {

};

RESU.Controllers.ProjectsController.prototype.backgroundTemplate = RESU.Views.Projects.background;
RESU.Controllers.ProjectsController.prototype.middleTemplate = RESU.Views.Projects.middle;
RESU.Controllers.ProjectsController.prototype.foregroundTemplate = RESU.Views.Projects.foreground;
RESU.Controllers.ProjectsController.prototype.propsTemplate = RESU.Views.Projects.props;
