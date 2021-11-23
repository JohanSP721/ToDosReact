import { useContext } from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Modal } from "./components/Modal";
import { ToDoForm } from "./components/ToDoForm";

import { ToDoContext } from "./context/ToDoContext";

import './assets/styles/Global.css';

export const App = () =>
{
	const { searchedToDos, deleteToDo, completeToDo, openModal } =  useContext(ToDoContext);

	return (
		<>
			<TodoCounter/>
			<TodoSearch/>
				<TodoList>
					{
						searchedToDos.map(toDo =>
						(
							<TodoItem key={toDo.title} onDelete={() => deleteToDo(toDo.id)} onComplete={() => completeToDo(toDo.id)} completed={toDo.co} title={toDo.title}/>
						))
					}
				</TodoList>
				{
					openModal &&
					<Modal>
						<ToDoForm />
					</Modal>
				}
			<CreateTodoButton/>
		</>
	);
};
