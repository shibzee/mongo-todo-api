//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

//var obj=new ObjectID();
//console.log(obj);
// var user={name: 'Sheriffdeen',age: 34};
// var {name}=user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('599b5f801756ad45746b74e6')
},
{
$set:{
  name: 'Abdulrazak'
},
$inc:{age: 7}
},
{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});

//db.close();
});
