const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const{User}=require('./../server/models/user');
const{ObjectID}=require('mongodb');
// var id='59b917727ffb4b1938e2f51b11';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos)=>{
// console.log('Todos',todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
// console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if (!todo){
//     return console.log('Id not found');
//   }
// console.log('Todo By Id',todo);
// }).catch((e)=> console.log(e));
User.findById('599c2efb53d77e4600729b51').then((user)=>{
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user,undefined,2));
},(e)=>{
  console.log(e);
});
