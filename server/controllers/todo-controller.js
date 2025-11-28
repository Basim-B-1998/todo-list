import Todo from '../models/Todo.js';


export const createTodo = async (req, res) => { 
  try {
    const { title, description } = req.body;
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