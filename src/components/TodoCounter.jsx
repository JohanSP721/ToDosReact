import React from 'react';

import '../assets/styles/components/TodoCounter.css';

export const TodoCounter = ({completedToDos, totalToDos}) =>
{
	return (
		<h2 className="TodoCounter">Has completado {completedToDos} de {totalToDos} TODOS</h2>
	);
};
