'use strict'
var sys = require('sys')
var exec = require('child_process').exec
var remote = require('electron').remote
var app = remote.app
var recordButton = document.querySelector('.record-btn')

recordButton.addEventListener('click', function () {
  exec('osascript ' + app.getAppPath() + '/bin/run_quicktime.scpt ' + app.getAppPath(), function (error, stdout, stderr) {
    sys.print('stdout: ' + stdout)
    sys.print('stderr: ' + stderr)
    if (error !== null) {
      console.log('exec error: ' + error)
    }
  })
})
