// SPDX-Licence: MIT

var bmp085 = require('bmp085-sensor');

var sensor = bmp085({address: 0x77,
                     mode: 3});

sensor.calibrate(function (err, data) {
  if(err || !data) {
    throw err;
  }
  console.log(data);
  sensor.read(function (err, data) {
    if(err || !data) {
      throw err;
    }
    // data is { pressure: 29.957463223223005, temp: 68.9 }
  });
});
