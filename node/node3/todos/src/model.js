"use strict"


import { getData, postData } from './utils/manage-data.js';

//get data from json file

//get all todos from server
async function getAll () { 
	let todos = await getData('../data/db.json');

	return todos
}


//Get by id
async function getById(id)  {
	let todos = await getData('../data/db.json');

	//find by Index
	let foundById = todos.find((item) => item.id === id )
	console.log(foundById)
	//const index = todos.findIndex(foundById)
	return foundById
}




//create new todo
async function create (newTodo) { 
	let todos = await getData('../data/db.json');

	todos.push(newTodo)
	postData('../data/db.json', todos)
	return todos
}



//Delete by id
	async function deleteById(todoById)  {
		let todos = await getData('../data/db.json');
		const index = todos.findIndex((todo) => todoById.id === todo.id)
		todos.splice(index, 1);
		postData('../data/db.json', todos)
		return index
}




//change by id
async function changeById(matching , newText)  {
	let todos = await getData('../data/db.json');

	const changed = todos.map(item => {
		if (item.id === matching.id) {
			 return { ...item, text: newText };
		}
		else {
			return item;
	  }
		})
	const index = todos.findIndex((todo) =>matching.id === todo.id)

	postData('../data/db.json', changed)
	return changed[index]
}


export { getAll, getById, create,  changeById, deleteById};