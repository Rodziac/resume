goog.provide('RESU.Controllers.HobbiesController');

goog.require('RESU.Views.Hobbies');
goog.require('RESU.MVC.Controller');

/**
 * Hobbies Story Constructor
 * @extends {RESU.MVC.Controller}
 * @override
 * @constructor
 */
RESU.Controllers.HobbiesController = function() {

    goog.base(this);

    this.storySlug = "hobbies";
    this.layoutController = new RESU.Controllers.LayoutController();

};
goog.inherits(RESU.Controllers.HobbiesController, RESU.MVC.Controller);

RESU.Controllers.HobbiesController.prototype.init = function() {

    this.layoutController.appendStory(
        this.storySlug,
        this.backgroundTemplate,
        this.middleTemplate,
        this.foregroundTemplate,
        this.propsTemplate
    );

    this.eventsHandler();

};

RESU.Controllers.HobbiesController.prototype.eventsHandler = function() {

    goog.events.listen(this.globalEvent, "page_scroll", function(e){

    });

};

RESU.Controllers.HobbiesController.prototype.backgroundTemplate = RESU.Views.Hobbies.background;
RESU.Controllers.HobbiesController.prototype.middleTemplate = RESU.Views.Hobbies.middle;
RESU.Controllers.HobbiesController.prototype.foregroundTemplate = RESU.Views.Hobbies.foreground;
RESU.Controllers.HobbiesController.prototype.propsTemplate = RESU.Views.Hobbies.props;
