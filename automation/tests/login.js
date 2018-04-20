module.exports = {
    'MentorMeld Login' : function (browser) {
      browser
        .url('localhost:3000')
        .waitForElementVisible('body', 5000)
        .useXpath()
        .click("//*[contains(text(), 'Login')]")
        .useCss()
        .pause(2000)
        // .waitForElementVisible('body', 1000)
        // .setValue('input[type=text]', ['MentorMeldc2018', client.Keys.ENTER])
        // .waitForElementVisible('body', 1000)     
        // .setValue('input[type=text]', ['T3$t@m3nt', client.Keys.ENTER])           
        //.assert.containsText('#root', 'MentorMeld')
        // .end();
    },

    'part two' : function(client) {
      client
        .setValue('input[type=email]', ['MentorMeldc2018', client.Keys.ENTER])
        .pause(5000)
        .setValue('input[type=password]', ['T3$t@m3nt', client.Keys.ENTER])
        .pause(5000)
        client.expect.element('body').to.be.present;
        client.expect.element('div').to.be.present;
        client.expect.element('li').to.be.present;
        client.expect.element('a').to.be.present;
        client.expect.element('h2').to.be.present;    
        client.end();
    }
  };