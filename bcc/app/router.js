/*load different views and compile with dot*/
/*function compileTemplate(view, model) {
  var viewString = fs.readFileSync(__dirname + '/' + view),
      template = dot.compile(viewString),
      final = template(model);

  return final;
}*/

/*app.use(function (req, res, next) {
    res.renderWithData = function (view, model, data) {
        res.render(view, model, function (err, viewString) {
            data.view = viewString;
            res.json(data);
        });
    };
    next();
});*/

/*Adding the database to the request prototype,
 so it can be used everywhere. Not actually used.*/
/*app.use(function(req, res, next){
   req.db = db;
   next();
});*/

module.exports = function (app, db) {
    var templates = db.get('templatesCollection');
    
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/templates/', function(req, res) {
     templates.find({}, {}, function(err, docs){
       if (err) {
         throw err;
       }

       res.send(docs);
     });
    });

    app.get('/create', function (req, res) {
     templates.findOne({_id: req.query.id}, function (err, doc) {
       if (err) {
         throw err;
       }

       /*var template = dot.compile(createView),
           html = template(doc);

       res.send(html);*/
       res.render('create.ejs', {
           template: doc
       });
     });
    });
}
