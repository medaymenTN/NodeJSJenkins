var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

// route that render message 
app.get('/message',(req,res)=>{

    res.send("hello jenkins")
})


app.listen(4000);