import mongoose from 'mongoose';

let TodoSchema = new mongoose.Schema({
  isDone: Boolean,
  description: String,
  type: String,
});


let Todo = mongoose.model('Todo', TodoSchema);

export default Todo;

exports.getTodos = () => {
  return new Promise((resolve, reject) => {
    Todo.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

// exports.getTodoById = (root, {id}) => {
//   return new Promise((resolve, reject) => {
//     Todo.findOne({id:id}).exec((err, res) => {
//       err ? reject(err) : resolve(res);
//     })
//   });
// };
//
//
// exports.addTodo = (description) => {
//   var newTodo = new Todo({isDone: false, description: description});
//
//   return new Promise((resolve, reject) => {
//     new Todo.save((err, res) => {
//       err ? reject(err) : resolve(res);
//     });
//   });
// };
//
// exports.toggleTodo = (isDone) => {
//   return new Promise((resolve, reject) => {
//     Todo.update({id: id}, {isDone: !isDone}, (err, res) => {
//       if (err) {
//         reject(err)
//       } else {
//         Todo.find({id: id}, (err, res) => {
//           err || res.length != 1 ? reject(err) : resolve(res[0]);
//         });
//       }
//     });
//   });
// };
