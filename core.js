const request = require('request')

String.prototype.slashReplace = function () {
  return this.split('|').join('/')
}
String.prototype.lineFeeds = function () {
  return this.split(';').join(";\r\n").split('}').join("\r\n\r\n}\r\n\r\n\r\n").split('{').join("\r\n\r\n\r\n{\r\n\r\n")
}

exports.url = (www) => {
  return new Promise((resolve, reject) => {
    request.get(www, (err, res, body) => {
      if (err) reject(err)
      resolve(body.lineFeeds())
    })
  })
}
