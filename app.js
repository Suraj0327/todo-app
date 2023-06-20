const express = require("express");
const bodyparser=require ("body-parser");
var items=["Do exercise","Read book","do breakfast"];
var workitems=[];
const app=express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"))
app.get("/",function(req,res){
    var today=new Date();
  var option={
    weekday:"long",
    day:"numeric",
    month:"long"
  }
  var day=today.toLocaleDateString("en-US", option);
    res.render("list",{listtitle:day, listitems:items})
    
});

app.post("/",function(req,res){
  var item=req.body.listitems;
  console.log(req.body);
  if(req.body.list==="Work list"){
    workitems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");

  }
  items.push(item);
  res.redirect("/");
 

})
app.get("/work",function(req,res){
  res.render("list",{listtitle:"Work list", listitems:workitems});
});
app.get("/about",function(req,res){
  res.render("about");
});
// app.post("/work",function(req,res){
//   var item=req.body.listitems;
//   workitems.push(item);
//   res.redirect("/work");
// })
app.listen(3000,function(){
    console.log("server is running on port 3000");
});