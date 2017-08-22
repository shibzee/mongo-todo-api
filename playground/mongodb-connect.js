//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var user={name: 'Sheriffdeen',age: 34};
// var {name}=user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//
// db.collection('Users').insertOne({
//   name:'Abdullahi',
//   age:40,
//   location:'25 philadelphia street Washington'
// },(err,result)=>{
//   if(err){
//     return console.log('Unable to insert todo ',err);
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
// })

db.close();
});
