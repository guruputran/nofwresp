/**
 * /*global $,console
 *
 * @format
 */

$(function () {
  "use strict";

  var tab = $(".tab li"),
    btn = $(".nav-bar .btn"),
    infoContent = $(".info-content");
  /*menu toggle*/
  btn.click(function () {
    $(".menu").toggleClass("hidden-xs");
  });
  /*our product information dynamic tab*/
  tab.click(function () {
    //styling active tab
    var that = $(this);
    that.addClass("active").siblings().removeClass("active");
    $(".content").hide();
    $("." + that.data("class")).show();
  });
});
