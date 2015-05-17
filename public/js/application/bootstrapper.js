goog.provide('RESU.Bootstrapper');

// Require globally required project resources
goog.require('RESU.Application');

/**
 * Starting up web application
 * @constructor
 */
RESU.Bootstrapper = function() {

    /**
     * Application Instance
     * Start the FOC Web Application
     * @type {RESU.Application}
     */
    var project = new RESU.Application();
        project.init();

};
goog.exportSymbol("RESU.Bootstrapper", RESU.Bootstrapper);