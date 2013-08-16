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

  app.view('viewport').drag(200, 200, 200, 0);


  app.debug().print("SettingsTest - Take screenshot of tap result. Check screenshot for settings list");
  app.device().screenshot();

  // Check title inputs
  app.input('title').tap();
  app.view('Ms').tap();
  app.view('Done').tap();

  // Name inputs
  app.input('name').enterText('FeedHenry', true);

  // Verify settings so far
  app.debug().print("SettingsTest - Take screenshot to verify inputs");
  app.device().screenshot();

  // Scroll down the page
  app.scroller('*').scroll(0, 0, 0, 100);

  // Toggle the input slider and switch
  app.view('value').tap();
  app.view('enable').tap();

  // Capture seetings
  app.debug().print("SettingsTest - Take screenshot to verify inputs");
  app.device().screenshot();

  // Save settings
  app.view('Save Settings').tap();
  sleep(2000);
  app.view('OK').tap();
  sleep(2000);

  // Go back to home page
  app.view('back').tap();
  sleep(2000);
  app.debug().print("SettingsTest - Take screenshot of result of pressing back button.");
  app.device().screenshot();
};