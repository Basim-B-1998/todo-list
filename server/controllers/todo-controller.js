import Todo from '../models/Todo.js';


export const createTodo = async (req, res) => { 
  try {
    const { title, description,status } = req.body;
    const newlyCreatedTodo = new Todo({ title, description });
    await newlyCreatedTodo.save();
    res.status(201).json({
      success: true,
      message: "Todo created",
      data: newlyCreatedTodo
  });
  } catch (error) {
    res.status(500).json({ 
    message: "Error occured"});
  }
}

export const fetchTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
     res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      data: todos,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

export const editTodo = async (req, res) => {
  try{
    const {id} = req.params;
    const {title, description, status} = req.body;
    const todo = await Todo.findById(id);
    if(!todo){
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      });
    }
    todo.title = title;
    todo.description = description;
    todo.status = status;
    await todo.save();
    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: todo
    });
  }catch(e){
    console.log(e);
    res.status(500).json({  
      success: false,
      message: "Error occured"
    });
  }
}

export const deleteTodo = async (req, res) => {
  try{
    const {id} = req.params;  
    const todo = await Todo.findByIdAndDelete(id);
    if(!todo){
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully"
    });
  }catch(e){
    console.log(e);
    res.status(500).json({  
      success: false,
      message: "Error occured"
    });
  }
}