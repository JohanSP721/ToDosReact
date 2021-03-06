import React from 'react';

import '../assets/styles/components/CreateTodoButton.css';

export const CreateTodoButton = ({setOpenModal}) =>
{
	const onClickButton = () =>
	{
		setOpenModal(prevState => !prevState);
	};

	return (
		<button className="CreateTodoButton" onClick={() => onClickButton()}>+</button>
	);
};
