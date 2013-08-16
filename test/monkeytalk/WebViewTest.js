load("libs/MonkeyTalkAPI.js");
load("libs/json2.js");

var Test = {};


Test.WebViewTest = function(app) {
  MT.Script.call(this, app, "WebViewTest.js");
};

Test.WebViewTest.prototype = new MT.Script();

Test.WebViewTest.prototype.call = function() {
  MT.Script.prototype.call(this);
};

MT.Application.prototype.webViewTest = function() {
  return new Test.WebViewTest(this);
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


Test.WebViewTest.prototype.run = function() {
  var app = this.app;

  app.debug().print("WebViewTest - Start");
  app.view('webviewBtn').tap();

  // Wait for transitions and act call to complete
  app.debug().print("WebViewTest - Wait for new view and animations.");
  sleep(2000);

  app.debug().print("WebViewTest - Take screenshot of tap result. Check screenshot for webview appearing");
  app.device().screenshot();

  // Go back to home page
  app.view('Close').tap();
  sleep(2000);
  app.debug().print("WebViewTest - Take screenshot of result of pressing back button.");
  app.device().screenshot();
};
