import { useContext } from 'react';

import { ToDoContext } from '../context/ToDoContext';

import '../assets/styles/components/CreateTodoButton.css';

export const CreateTodoButton = () =>
{
	const { setOpenModal } = useContext(ToDoContext);

	const onClickButton = () =>
	{
		setOpenModal(prevState => !prevState);
	};

	return (
		<button className="CreateTodoButton" onClick={() => onClickButton()}>+</button>
	);
};
