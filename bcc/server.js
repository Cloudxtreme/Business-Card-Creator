var express = require('express'),
    config = require('./app/config.js');
require('ejs');
    //createView = fs.readFileSync(__dirname + '/create.html');
var mongo = require('mongodb'),
    monk = require('monk'),
    db = monk(config.db.link),
    templatesCollection = db.get('templatesCollection');

var env = process.env.NODE_ENV || "development";
var app = express();
// Make our db accessible to our router
/*By adding this function to app.use,
we're adding that object to every HTTP request (ie: "req")
our app makes. Note: this is probably sub-optimal for performance
but, again, we're going quick-n-dirty here.*/

app.set('view-engine', 'ejs');
require('./app/router.js')(app, db);
/*TESTING PURPOSE ONLY*/
/*
documentsCount(templates);
function documentsCount(collection, query) {
  collection.count(query || {}, function (error, count) {
    if (error) {
      throw error;
    }
    if (count < 5) {
      collection.insert({
          "name" : "sample name two",
          "structure" : "<div>ASd 2</div>",
          "src" : "http://images.sixrevisions.com/2009/12/06-28_slick_businesscard_line_tool.jpg"
        },
        {
          "name" : "sample name three",
          "structure" : "<div>ASd 3</div>",
          "src" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKlx8LBzJnUNXtar5MLhWtV-ORY5YNqcDC-LofGImLlMw9pmT"
      });
      count += 2;
    }
  });
*/
  /*insert adds two objects, then it sees that it doesn't need
   what you insertet, so it squirts on object out.
  That's why the first time count returns 4, and the second 5.*/
/*}*/





//Error handlers
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Something broke!");
});

app.use(express.static(__dirname));
app.listen(80);

console.log("Server listens to port: 80 ...");
