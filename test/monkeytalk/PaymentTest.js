load("libs/MonkeyTalkAPI.js");
load("libs/json2.js");

var Test = {};


Test.PaymentTest = function(app) {
  MT.Script.call(this, app, "PaymentTest.js");
};

Test.PaymentTest.prototype = new MT.Script();

Test.PaymentTest.prototype.call = function() {
  MT.Script.prototype.call(this);
};

MT.Application.prototype.paymentTest = function() {
  return new Test.PaymentTest(this);
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

var cardNumber = '1234567890101112';
Test.PaymentTest.prototype.run = function() {
  var app = this.app;

  app.debug().print("PaymentTest - Start");
  app.view('paymentBtn').tap();

  // Wait for page transition
  sleep(2000);

  app.debug().print("PaymentTest - Take screenshot of tap result. Check screenshot for payment screen");
  app.device().screenshot();

  // Test card selection
  app.debug().print("PaymentTest - Test card selection.");
  app.input('cardtype').tap();
  app.view('Mastercard').tap();
  app.view('Done').tap();
  sleep(1000);
  app.input('cardtype').verify('Mastercard');

  // Wait for selection to hide and take screen shot of entered card
  app.device().screenshot();

  //Enter a card number
  app.debug().print("PaymentTest - Test entering a card number.");
  app.input('cardnumber').enterText(cardNumber, true);
  app.input('cardnumber').verify(cardNumber);
  app.device().screenshot();

  // Validate the card and capture the output
  app.debug().print("PaymentTest - Test Act call and response for card validation");
  app.view('Validate Card Number').tap();
  // Wait for act call
  sleep(10000);
  app.device().screenshot();
  app.view('Response').verify();
  app.view('OK').tap();

  // Wait for close animation
  sleep(1000);

  // Go back to home page
  app.view('Back').tap();
  sleep(1000);
  app.debug().print("PaymentTest - Take screenshot of result of pressing back button.");
  app.device().screenshot();
};
