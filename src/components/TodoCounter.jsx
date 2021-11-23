import { useContext } from 'react';

import { ToDoContext } from "../context/ToDoContext";

import '../assets/styles/components/TodoCounter.css';

export const TodoCounter = () =>
{
	const { totalToDos, completedToDos } = useContext(ToDoContext);

	return (
		<h2 className="TodoCounter">Has completado {completedToDos} de {totalToDos} TODOS</h2>
	);
};
