var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo= new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
  res.send(doc);
  }
  ,(e)=>{
    res.status(400).send(e);
  });

});



app.listen(3000,()=>{
  console.log('Started on post 3000');
});

module.exports={app};
 // var newTodo= new Todo({
 //   text:'Learning Angular Js',
 // });
 //
 // newTodo.save().then((doc)=>{
 //   console.log('Saved todo ',doc);
 // }
 // ,(e)=>{
 //   console.log('Unable to save todo');
 // });

//user
//email -require  -trim -string -set min length of 1

// var newUser=new User({
//   email: "Sherifdeenmuhammed@gmail.com"
// });
// newUser.save().then((doc)=>{
//   console.log('Saved new User ',doc);
// },(e)=>{
//   console.log('Unable to save new User ',e);
// });
