goog.provide('RESU.Application');

goog.require('RESU.MVC.Controller');

goog.require('RESU.Controllers.LayoutController');
goog.require('RESU.Controllers.IntroController');
goog.require('RESU.Controllers.SchoolController');
goog.require('RESU.Controllers.WorkController');
goog.require('RESU.Controllers.ProjectsController');
goog.require('RESU.Controllers.HobbiesController');
goog.require('RESU.Controllers.FinaleController');

goog.require('goog.events.EventType');

/**
 * Web application base constructor
 * @override
 * @constructor
 */
RESU.Application = function() {

    this.globalEvent =  /** @type {goog.events.EventTarget} */ (new RESU.GlobalEvent());

};

/**
 * Start up application
 */
RESU.Application.prototype.init = function() {

    var layoutController = new RESU.Controllers.LayoutController();
    layoutController.init();

    var introController = new RESU.Controllers.IntroController();
    var schoolController = new RESU.Controllers.SchoolController();
    var workController = new RESU.Controllers.WorkController();
    var projectsController = new RESU.Controllers.ProjectsController();
    var hobbiesController = new RESU.Controllers.HobbiesController();
    var finaleController = new RESU.Controllers.FinaleController();

    introController.init();
    schoolController.init();
    workController.init();
    projectsController.init();
    hobbiesController.init();
    finaleController.init();

};
/**
 * Global event hub
 * @extends {goog.events.EventTarget}
 * @constructor
 */
RESU.GlobalEvent = function(){
    goog.base(this);
};
goog.inherits(RESU.GlobalEvent, goog.events.EventTarget);
