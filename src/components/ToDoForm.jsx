import React,{ useState } from 'react';

import '../assets/styles/components/ToDoForm.css';

export const ToDoForm = ({ setOpenModal, addToDo }) =>
{
	const [ newToDoValue, setNewToDoValue ] = useState('');

	const onChange = e =>
	{
		const { value } = e.target;

		setNewToDoValue(value);
	}

	const onCancel = () =>
	{
		setOpenModal(prevState => !prevState);
	};

	const onSubmit = e =>
	{
		e.preventDefault();

		addToDo(newToDoValue);

		setOpenModal(prevState => !prevState);
	}

	return (
		<form onSubmit={onSubmit} >
			<label>Escribe tu nuevo To Do</label>
			<textarea
				value = {newToDoValue}
				onChange = {onChange}
				placeholder = "Escribe una nueva tarea"
			/>
			<article className="TodoForm-buttonContainer">
				<button
				type="button"
				className="TodoForm-button TodoForm-button-cancel"
				onClick = {onCancel}
				>
				Cancelar
				</button>

				<button
				className="TodoForm-button TodoForm-button-add"
				type= "submit"
				>
				Añadir
				</button>
			</article>
    	</form>
	)
};
