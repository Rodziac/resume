goog.provide('RESU.Application');

goog.require('RESU.MVC.Controller');

goog.require('RESU.Controllers.LayoutController');
goog.require('RESU.Controllers.IntroController');
goog.require('RESU.Controllers.SchoolController');
goog.require('RESU.Controllers.WorkController');
goog.require('RESU.Controllers.ProjectsController');
goog.require('RESU.Controllers.HobbiesController');
goog.require('RESU.Controllers.FinaleController');

goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.fx.dom');
goog.require('goog.structs.Map');


/**
 * Web application base constructor
 * @override
 * @constructor
 */
RESU.Application = function() {

    this.scrollProgress = 0;

    this.globalEvent =  /** @type {goog.events.EventTarget} */ (new RESU.GlobalEvent());
    RESU.Registry.set("GlobalEvent",  this.globalEvent);

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

    this.eventHandlers();

};


/**
 * Application event listeners
 */
RESU.Application.prototype.eventHandlers = function() {

    var that = this;

    goog.events.listen(window.document.body, goog.events.EventType.WHEEL, function(e){

        e.preventDefault();
        that.screenScroller(e);

    });

};

RESU.Application.prototype.screenScroller = function(e) {

    var direction = e.getBrowserEvent().deltaY > 0 ? "down" : "up";

    switch (direction) {
        case "up":
            if (this.scrollProgress <= 0) {
                this.scrollProgress = 0;
            } else {
                this.scrollProgress -= 1;
            }
            break;
        case "down":
            if (this.scrollProgress >= 10000) {
                this.scrollProgress = 10000;
            } else {
                this.scrollProgress += 1;
            }
            break;
    }

    this.globalEvent.dispatchEvent({type: "page_scroll", position: this.scrollProgress});

};

RESU.Registry = new goog.structs.Map;

/**
 * Global event hub
 * @extends {goog.events.EventTarget}
 * @constructor
 */
RESU.GlobalEvent = function(){
    goog.base(this);
};
goog.inherits(RESU.GlobalEvent, goog.events.EventTarget);
