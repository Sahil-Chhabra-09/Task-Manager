const mongoose = require("mongoose");

//setting up structure for our document
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "you must provide a name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//model is the representation for the collection
//So, Task is the collection and Schema is defined above for this collection
//Model name : Task
//Schema : TaskSchema
//Now, we can use our database in our controllers
//an instance of a model is called a document

/*
So, to setup our own database, we have few simple steps:
1. Connect to database using mongoose.connect
2. Create a Schema and a Collection
3. Export it
*/
module.exports = mongoose.model("Task", TaskSchema);
