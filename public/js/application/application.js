goog.provide('RESU.Application');

goog.require('RESU.MVC.Controller');
goog.require('RESU.MVC.Model');
goog.require('RESU.MVC.View');

goog.require('RESU.Controllers.LayoutController');
goog.require('RESU.Controllers.IntroController');
goog.require('RESU.Controllers.SchoolController');
goog.require('RESU.Controllers.WorkController');
goog.require('RESU.Controllers.ProjectsController');
goog.require('RESU.Controllers.HobbiesController');
goog.require('RESU.Controllers.FinaleController');


/**
 * Web application base constructor
 * @override
 * @constructor
 */
RESU.Application = function() {


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
