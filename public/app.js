console.log('waiting');
var obj = {};
var request = new XMLHttpRequest();
var date = [];

// xv6f-9u5j

request.open('GET', 'https://data.seattle.gov/api/views/jvdx-443h/rows.json?accessType=DOWNLOAD', true);

// request.open('GET', 'https://data.seattle.gov/api/views/xv6f-9u5j/rows.json?accessType=DOWNLOAD', true);

// request.open('GET', 'https://data.seattle.gov/api/views/jvdx-443h/rows.json?accessType=DOWNLOAD', true);


request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    console.log('status 200');
    var resp = request.responseText;
    var parse = JSON.parse(resp);
    console.log(parse.data[0]);
    console.log(parse.data.length);
    // console.log('at 12:17 pm it was 31904');

    for (var i = 0; i < parse.data.length; i++) {
    //   date.push(parse.data[i][15]);

    //   console.log(parse.data[0]);
    //   debugger;
      obj[parse.data[i][12]] = parse.data[i][15];
    //   console.log(obj);
      date.push(obj);
    }
    console.log(parse.data[0].length);
    console.log(obj);
    console.log(date);
  }
};


request.onerror = function() {
  console.log('errors');
};

request.send();
