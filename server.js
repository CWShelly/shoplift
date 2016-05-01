const http = require('http');


// Note: use this url for data on assault with guns: https:// data.seattle.gov/Public-Safety/Assault-Gun/xv6f-9u5j

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' } );

  function getJson(cb) {
    console.log('something');
    return http.get({
      host:'data.seattle.gov',
      path:'/api/views/jvdx-443h/rows.json?accessType=DOWNLOAD'
    }, function(response) {

      var arr = [];
      var obj = {};
      var body = '';
      response.on('data', function(d) {
        var str = d.toString();
        body += d;
      });

      response.on('end', function() {
        var parsed = JSON.parse(body);
        var h = parsed.data;

        for (var i = 0; i < parsed.data.length; i++) {
          obj[h[i][12]] = h[i][15];
          arr.push(obj);
        //   var k = parsed.data[i][15];
        //   res.write(k.toString());

          console.log(obj);
        }
        res.write('placeholder text');
        // res.write(h.toString());
        console.log(parsed.data.length);
      });
      cb = function() {};
    //   res.end();
    });
    res.end();
  }

  getJson();


});
server.listen(3000, () => process.stdout.write('server up on 3000'));
