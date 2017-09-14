const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const{User}=require('./../server/models/user');
const{ObjectID}=require('mongodb');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//todo.findOneandremove
//todo.findbyidandremove

Todo.fineOneAndRemove({_id:'59ba73bc71976e70cf1a3a38'}).then((todo)=>{

});

Todo.findByIdAndRemove('59ba73bc71976e70cf1a3a38').then((todo)=>{
  console.log(todo)
});
