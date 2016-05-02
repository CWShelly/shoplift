const http = require('http');
const request = require('superagent');


const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'application/json' } );
  res.writeHead(200, { 'Content-Type': 'text/html' } );

  request.get('https://data.seattle.gov/api/views/xv6f-9u5j/rows.json?accessType=DOWNLOAD')
.end((err, res) => {
  if (err) { console.log(err);
  }

  for (var i = 0; i < res.body.data.length; i++) {
    console.log(res.body.data[i][20]);
  }

  // console.log(res.body.data[0]);
});
  res.end();

});


server.listen(3000, () => process.stdout.write('server up on 3000'));
