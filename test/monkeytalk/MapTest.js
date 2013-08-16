load("libs/MonkeyTalkAPI.js");
load("libs/json2.js");

var Test = {};


Test.MapTest = function(app) {
  MT.Script.call(this, app, "MapTest.js");
};

Test.MapTest.prototype = new MT.Script();

Test.MapTest.prototype.call = function() {
  MT.Script.prototype.call(this);
};

MT.Application.prototype.mapTest = function() {
  return new Test.MapTest(this);
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


Test.MapTest.prototype.run = function() {
  var app = this.app;

  app.debug().print("MapTest - Start");
  app.view('mapBtn').tap();

  // Wait for transitions
  sleep(1000);

  app.debug().print("MapTest - Take screenshot of tap result.");
  app.device().screenshot();

  // Change to satellite view
  app.view('Satellite').tap();
  sleep(1000);
  app.debug().print("MapTest - Take screenshot of satellite tap result.");
  app.device().screenshot();

  // Go back to home page
  app.view('back').tap();
  sleep(1000);
  app.debug().print("MapTest - Take screenshot of result of pressing back button.");
  app.device().screenshot();
};
