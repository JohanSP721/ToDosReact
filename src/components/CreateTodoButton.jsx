import { useContext } from 'react';

import '../assets/styles/components/CreateTodoButton.css'
import { ToDoContext } from '../context/ToDoContext';

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
