// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// module.exports = {
//   'default e2e tests': function (browser) {
//     // automatically uses dev Server port from /config.index.js
//     // default: http://localhost:8080
//     // see nightwatch.conf.js
//     const devServer = browser.globals.devServerURL
//
//     browser
//       .url(devServer)
//       .waitForElementVisible('#app', 5000)
//       .expect.element('body').to.be.present().before(3000)
//       .end()
//   }
// }


// Account setting.
const accountConfig = {
  username: 'test',
  password: '123'
}

module.exports = {
  'AoBuy Login Test': function (client) {
    const devServer = client.globals.devServerURL

    client.url(devServer)

    // Page Init.
    client.expect.element('body').to.be.present.before(3000)
    client.expect.element('#user').to.be.visible

    // Login.
    client.pause(2000)
    client.setValue('#user', accountConfig.username)
    client.setValue('#password', accountConfig.password)
    client.click('.login-btn')
    client.pause(2000)

    // Wait and check page has been reloaded.
    client.frameParent()
    client.pause(4000)
    client.expect.element('body').to.be.present.before(3000)

    // Check cookies to ensure we are signed in.
    client.getCookies(function (result) {
      result.value.forEach((value, index, array) => {
        console.log(value,index,array)
        if (value.name === 'DedeUserID') client.assert.equal(parseInt(value.value, 10))
      })
    })

    client.pause(1000)
    client.end()
  }
}




