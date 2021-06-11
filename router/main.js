const bodyParser = require('body-parser');

module.exports = function(app) {
      app.use(bodyParser.json());             // to support JSON-encoded bodies
      app.use(bodyParser.urlencoded({         // to support URL-encoded bodies
         extended: true
      }));
     
      app.get('/',function(req,res){          // "/"의 의미는 https://testestttttt.herokuapp.com/
        res.render('index.html')             //views 안에는 html 파일만
      });
      app.get('/about',function(req,res){
        res.render('about.html');
      });
      app.get('/how',function(req,res){
         res.render('how.html');
      });
     
      app.get('/listall', function (req, res) {
      //res.render('about.html');
      console.log('listall...');
      const getNumber = req.body.getNumber;
      let response = {
            'result': 'true',
            'getLists': getNumber 
      }
      
      console.log('response : ' + response);
      res.status(200).json(response);
   });  // end of get
     
}
