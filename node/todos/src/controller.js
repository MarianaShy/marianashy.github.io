"use strict"

//call  UUID module 
import { v4 as uuidv4 } from 'uuid';

//call functions which handles data for CRUD operations
import * as models from "./model.js";


//handle routes, catch error


//get all todos
async function getAll(req, res) {
	try {
		const todos = await models.getAll();
		res.status(200).json( todos ); 
   } catch (error) {
	res.status(500).json({ error: error.message });
   }
};

//create new todo
async function create(req, res) {
	try {
		if (!req.body.text){
			res.status(400).json("Missing required field text");
	   }
		else {
			const newTodo = { id: uuidv4(), text: req.body.text, "completed": false };
			const todos = await models.create(newTodo)
			res.status(200).json(newTodo);
	   }
   } catch (error) {
		res.status(500).json({ error: error.message });
	}
};


//change
async function markComplited(req, res) {
	try {
		res.send('Delete todo by id') 
   } catch (error) {
	res.status(500).json({ error: error.message });
   }
};


//delete Todo by ID
async function change(req, res) {
	try {
		res.send('Change todo by id')
   } catch (error) {
		res.status(500).json({ error: error.message });
   }
};


export { getAll, create, markComplited, change };