import '../assets/styles/components/TodoCounter.css';

export const TodoCounter = ({total, completed}) =>
{
	return (
		<h2 className="TodoCounter">Has completado {completed} de {total} TODOS</h2>
	);
};
