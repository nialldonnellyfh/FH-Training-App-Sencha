load("libs/MonkeyTalkAPI.js");
load("libs/json2.js");

var Test = {};


Test.TwitterTest = function(app) {
  MT.Script.call(this, app, "TwitterTest.js");
};

Test.TwitterTest.prototype = new MT.Script();

Test.TwitterTest.prototype.call = function() {
  MT.Script.prototype.call(this);
};

MT.Application.prototype.twitterTest = function() {
  return new Test.TwitterTest(this);
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


Test.TwitterTest.prototype.run = function() {
  var app = this.app;

  app.debug().print("TwitterTest - Start");
  app.view('twitterBtn').tap();

  // Wait for transitions and act call to complete
  app.debug().print("TwitterTest - Wait for tweets and animations");
  sleep(10000);

  app.debug().print("TwitterTest - Take screenshot of tap result. Check screenshot for tweets list");
  app.device().screenshot();

  // Go back to home page
  app.view('back').tap();
  sleep(2000);
  app.debug().print("TwitterTest - Take screenshot of result of pressing back button.");
  app.device().screenshot();
};
