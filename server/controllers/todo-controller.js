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