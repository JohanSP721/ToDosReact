import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

import './assets/styles/Global.css';

const App = () =>
{
	const toDos =
	[
		{title: "Cortar Cebollas", completed: false, id: 1},
		{title: "Llorar en la lloreria", completed: false, id: 2},
		{title: "Terminar Los cursos de platzi", completed: false, id: 3}
	]

	return (
		<>
			<TodoCounter/>
			<TodoSearch/>
			<TodoList>
				{
					toDos.map(toDo =>
					(
						<TodoItem key={toDo.id} completed={toDo.completed} title={toDo.title}/>
					))
				}
			</TodoList>
			<CreateTodoButton/>
		</>
	);
};

export default App;
