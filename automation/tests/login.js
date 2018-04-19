module.exports = {
    'MentorMeld Login' : function (browser) {
      browser
        .url('localhost:3000')
        .waitForElementVisible('body', 5000)
        .useXpath()
        .click("//*[contains(text(), 'Login')]")
        .useCss()
        .pause(2000)
        //.assert.containsText('#root', 'MentorMeld')
        .end();
    }
  };