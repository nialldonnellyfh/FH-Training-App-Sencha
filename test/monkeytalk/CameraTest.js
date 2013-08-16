load("libs/MonkeyTalkAPI.js");
load("libs/json2.js");

var Test = {};


Test.CameraTest = function(app) {
  MT.Script.call(this, app, "CameraTest.js");
};

Test.CameraTest.prototype = new MT.Script();

Test.CameraTest.prototype.call = function() {
  MT.Script.prototype.call(this);
};

MT.Application.prototype.cameraTest = function() {
  return new Test.CameraTest(this);
};

function sleep(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) {
    now = new Date();
    if (now.getTime() > exitTime) {
      return;
    }
  }
};


Test.CameraTest.prototype.run = function() {
  var app = this.app;

  app.debug().print("CameraTest - Start");
  app.view('cameraBtn').tap();

  // Wait for camera to open
  sleep(6000);

  app.debug().print("CameraTest - Take screenshot of camera page to verify it opened.");
  app.view('Cancel').tap()

  // Go back to home page
  sleep(2000);
  app.debug().print("CameraTest - Take screenshot of result of pressing back button.");
  app.device().screenshot();
};
