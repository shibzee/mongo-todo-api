var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo= new Todo({
    text:req.body.text
//  console.log(req.body);
  });
  todo.save().then((doc)=>{
  res.send(doc);
  }
  ,(e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});

  },(e)=>{
  res.status(400).send(e);
});
});
//GEt /TODOS/id
app.get('/todos/:id',(req,res)=>{
    var id =req.params.id;
 if(!ObjectID.isValid(id)){
   return res.status(404).send();
 }
 Todo.findById(id).then((todo)=>{
   if(!todo){
     return res.status(404).send();
   }
   res.send({todo});
 }).catch((e)=>{
   res.status(400).send();
 });
     //valid id using isValid
     //404 send back an empty body
     //find By id
     //success
     //if todo - send it back
     //if no todo -send back 404 with empty body
     //error
     //400 - and send empty body back
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
