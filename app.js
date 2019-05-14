const request = require('request');
const ftoc = require('fahrenheit-to-celsius');
request('https://us1.locationiq.com/v1/search.php?key=b0e65b4fea170a&q=Universidad de Colima Campus Central&format=json', (err, res, body) => {
  if (!err) {
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i++) {
      if (data[i].display_name.includes('Universidad de Colima Campus Central')){
        request(`https://api.darksky.net/forecast/e430a90be4797ef18aaff6ffe17ce66b/${data[i].lat},${data[i].lon}`, (err, res, body) => {
          if (!err) {
            console.log(ftoc(JSON.parse(body).currently.temperature), 'Celsius');
            var options = {
              method: 'GET',
              url: 'https://api.openuv.io/api/v1/uv',
              qs: { lat: data[i].lat, lng: data[i].lon },
              headers: {
                'content-type': 'application/json',
                'x-access-token': '97cc82ea15faf6aa7e4c8c5131846f10'
              }
            };

            request(options, function (err, res, body) {
              if (!err)
                console.log(JSON.parse(body).result.uv, 'UV');
              else
                console.log('error:', err);
            });
          }
          else
            console.log('error:', err);
        });
        break;
      }
    }
  } else {
    console.log('error:', err);
  }
})
