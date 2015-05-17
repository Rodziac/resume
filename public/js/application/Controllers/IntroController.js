goog.provide('RESU.Controllers.IntroController');

goog.require('RESU.Views.Intro');

/**
 * Intro Story Constructor
 * @extends {RESU.MVC.Controller}
 * @override
 * @constructor
 */
RESU.Controllers.IntroController = function() {

    goog.base(this);

    this.storySlug = "intro";
    this.layoutController = new RESU.Controllers.LayoutController();

};
goog.inherits(RESU.Controllers.IntroController, RESU.MVC.Controller);

RESU.Controllers.IntroController.prototype.init = function() {

    this.layoutController.appendStory(
        this.storySlug,
        this.backgroundTemplate,
        this.middleTemplate,
        this.foregroundTemplate,
        this.propsTemplate
    );

    this.eventsHandler();

};

RESU.Controllers.IntroController.prototype.eventsHandler = function() {

};

RESU.Controllers.IntroController.prototype.backgroundTemplate = RESU.Views.Intro.background;
RESU.Controllers.IntroController.prototype.middleTemplate = RESU.Views.Intro.middle;
RESU.Controllers.IntroController.prototype.foregroundTemplate = RESU.Views.Intro.foreground;
RESU.Controllers.IntroController.prototype.propsTemplate = RESU.Views.Intro.props;
