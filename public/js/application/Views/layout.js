// This file was automatically generated from layout.soy.
// Please don't edit this file by hand.

goog.provide('RESU.Views.Layout');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
RESU.Views.Layout.mainLayout = function(opt_data, opt_ignored) {
  return '<div id="headerContainer">' + RESU.Views.Layout.header(null) + '</div><div id="storyContainer"></div><div id="dartContainer"><span id="dart"></span></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
RESU.Views.Layout.header = function(opt_data, opt_ignored) {
  return '<a href="#"><span class="logo"></span></a><a href="#"><span class="twitter"></span></a><a href="#"><span class="facebook"></span></a><a href="#"><span class="tumblr"></span></a><a href="#"><span class="youtube"></span></a>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
RESU.Views.Layout.storyLayout = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div id="' + opt_data.params.slug + '" class="' + goog.getCssName('story') + '"><div class="' + goog.getCssName('background') + '">' + opt_data.params.background + '</div><div class="' + goog.getCssName('middle') + '">' + opt_data.params.middle + '</div><div class="' + goog.getCssName('foreground') + '">' + opt_data.params.foreground + '</div><div class="' + goog.getCssName('props') + '">' + opt_data.params.props + '</div></div>';
};
