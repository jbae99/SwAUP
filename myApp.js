const http = require('http');
var url = require('url');
var sqlite3 = require('sqlite3');

const hostname = 'localhost';
const port = 3000;

//connect to database
let db = new sqlite3.Database('depaup.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    };
    console.log('Connected to the DepAUP database.');
  });

http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if ( req.method === 'OPTIONS' ) {
    res.writeHead(200);
    res.end();
    return;
  }

  var q = url.parse(req.url, true).query;
  let testQ = `SELECT * FROM User WHERE aup_id="${q.aup_id}"`; 

  db.each(testQ, 
    (err, row) => {
      if(err){
        console.error(err.message);
      };

      json = JSON.stringify(row);
      console.log(row.aup_id);
      res.write(json);
    },
    (err, count) => {
      res.end();
    }
  );
  
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
