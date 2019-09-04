var express = require("express");
var app = express();

var multer = require('multer');
var route = express.Router();

// SET STORAGE
var storage = multer.diskStorage({
	
  destination: function (req, file, cb) {
	  console.log("inside destination ", req);
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
	  console.log("the file is ", file);
    //cb(null, file.fieldname + '-' + Date.now())
	cb(null, file.originalname);
  }
}) 
var upload = multer({ storage: storage })

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

//Single pic upload
app.post('/data', upload.single('pic'), (req, res) => {
	console.log("Uploaded..");
    res.json({ message : 'File uploaded' })
});

//Multiple pic upload
app.post('/multipleFileUpload', upload.array('pics', 12), function(req, res) {
	console.log("Uploaded..");
    res.json({ message : 'File uploaded' })
});

//app.use('/api',route);
app.listen(3001,function(){
    console.log('Server started');
});