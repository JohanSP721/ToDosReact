import { useState } from 'react';

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

import './assets/styles/Global.css';

const defaultToDos =
	[
		{title: "Cortar Cebollas", completed: true, id: 1},
		{title: "Llorar en la lloreria", completed: false, id: 2},
		{title: "Terminar Los cursos de platzi", completed: false, id: 3}
	]


export const App = () =>
{

	const [toDos, setToDos] = useState(defaultToDos);

	const [searchValue, setSearchValue] = useState('');

	const completedToDos = toDos.filter(toDo => toDo.completed).length;
	const totalToDos = toDos.length;

	let searchedToDos = !searchValue.length >= 1 ? toDos : toDos.filter(toDo =>
		{
			const toDoText = toDo.title.toLowerCase();
			const searchText = searchValue.toLowerCase();

			return toDoText.includes(searchText);
		});

	const completeToDo = (id) =>
	{
		const toDoIndex = toDos.findIndex(toDo => toDo.id === id);

		const newToDos = [...toDos];

		newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed;

		setToDos(newToDos);
	}

	const deleteToDo = (id) =>
	{
		const toDoIndex = toDos.findIndex(toDo => toDo.id === id);

		const newToDos = [...toDos];

		newToDos.splice(toDoIndex, 1);

		setToDos(newToDos);
	}

	return (
		<>
			<TodoCounter total={totalToDos} completed={completedToDos}/>
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
			<TodoList>
				{
					searchedToDos.map(toDo =>
					(
						<TodoItem key={toDo.id} onDelete={() => deleteToDo(toDo.id)} onComplete={() => completeToDo(toDo.id)} completed={toDo.completed} title={toDo.title}/>
					))
				}
			</TodoList>
			<CreateTodoButton/>
		</>
	);
};
