import '../assets/styles/components/CreateTodoButton.css'

export const CreateTodoButton = () =>
{
	const onClickButton = msg =>
	{
		alert(msg);
	}

	return (
		<button className="CreateTodoButton" onClick={() => onClickButton('Aqui deberia abrirse el modal')}>+</button>
	);
};
