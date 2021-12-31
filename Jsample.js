"use strict";
exports.__esModule = true;
exports.Demo = void 0;
var Demo = /** @class */ (function () {
    function Demo(mes) {
        this.message = mes;
    }
    Demo.prototype.ClickGo = function () {
        $("#lblGo").text("You pressed the Go button");
    };
    Demo.prototype.ClickInfo = function () {
        $("#Info").text(this.message);
        $("#Info").fadeOut("slow");
        $("#Info").fadeIn(2000);
    };
    return Demo;
}());
exports.Demo = Demo;
var dem = new Demo("bla bla bla bla");
$(document).ready(function () {
    $('#btnGo').click(function () {
        dem.ClickGo();
    });
    //$("#btnShowInfo").click(dem.ClickInfo); // doesn't work
    $("#btnShowInfo").click(function () {
        dem.ClickInfo();
    });
});
/*
window.onload = () => {
    $('#btnGo').click(function () {
           dem.ClickGo();
    });
    $("#btnShowInfo").click(dem.ClickInfo);
};
*/ 
