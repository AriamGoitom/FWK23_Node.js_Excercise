let express = require("express");
let app = express();
let port = 8080;

let httpServer = app.listen(port, function() {
    console.log('Webbserver kört på ${port}');
    });
    app.get("/", function(req, res) {
       console.log("En klient anslöt"); 
       res.sendFile(__dirname + "/index.html");
    });
    
    app.get("/undersida", function (req, res) {
      res.sendFile(__dirname + '/undersida.html');
    });
    app.use(express.static("filer"));
   