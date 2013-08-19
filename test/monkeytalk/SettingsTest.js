load("libs/MonkeyTalkAPI.js");
load("libs/json2.js");

var Test = {};


Test.SettingsTest = function(app) {
  MT.Script.call(this, app, "SettingsTest.js");
};

Test.SettingsTest.prototype = new MT.Script();

Test.SettingsTest.prototype.call = function() {
  MT.Script.prototype.call(this);
};

MT.Application.prototype.settingsTest = function() {
  return new Test.SettingsTest(this);
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


Test.SettingsTest.prototype.run = function() {
  var app = this.app;

  app.debug().print("SettingsTest - Start");
  app.view('settingsBtn').tap();

  // Wait for transitions and act call to complete
  app.debug().print("SettingsTest - Wait for animations");
  sleep(2000);

  app.debug().print("SettingsTest - Take screenshot of tap result. Check screenshot for settings list");
  app.device().screenshot();

  // Check title inputs
  app.input('title').tap();
  app.view('Ms').tap();
  app.view('Done').tap();
  sleep(1000);
  app.input('title').verify('Ms');

  // Name inputs
  app.input('name').enterText('FeedHenry', true);
  app.input('name').verify('FeedHenry');

  // Verify settings so far
  app.debug().print("SettingsTest - Take screenshot to verify inputs");
  app.device().screenshot();

  // Toggle the input slider and switch
  app.view('value').tap();
  app.view('enable').tap();

  // Capture seetings
  app.debug().print("SettingsTest - Take screenshot to verify inputs of slider and toggle.");
  app.device().screenshot();
};