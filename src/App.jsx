import React from 'react';

import { useToDos } from "./hooks/useToDos";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Modal } from "./components/Modal";
import { ToDoForm } from "./components/ToDoForm";

import './assets/styles/Global.css';

export const App = () =>
{
	const { searchedToDos, deleteToDo, completeToDo, openModal, setSearchValue, searchValue, setOpenModal, totalToDos, completedToDos, addToDo } =  useToDos();

	return (
		<>
			<TodoCounter totalToDos={totalToDos} completedToDos={completedToDos}/>
			<TodoSearch setSearchValue={setSearchValue} searchValue={searchValue}/>
			<TodoList>
				{
					searchedToDos.map(toDo =>
					(
						<TodoItem key={toDo.title} onDelete={() => deleteToDo(toDo.id)} onComplete={() => completeToDo(toDo.id)} completed={toDo.completed} title={toDo.title}/>
					))
				}
			</TodoList>
			{
				openModal &&
				<Modal>
					<ToDoForm setOpenModal={setOpenModal} addToDo={addToDo}/>
				</Modal>
			}
			<CreateTodoButton setOpenModal={setOpenModal}/>
		</>
	);
};
