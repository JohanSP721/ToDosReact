import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ToDoContext = createContext();

const ToDoProvider = ({children}) =>
{
	const [toDos, saveToDos] = useLocalStorage('TODOS_V1', []);

	const [searchValue, setSearchValue] = useState('');

	const [ openModal, setOpenModal ] = useState(false);

	const completedToDos = toDos.filter(toDo => toDo.completed).length;
	const totalToDos = toDos.length;

	let searchedToDos = !searchValue.length >= 1 ? toDos : toDos.filter(toDo =>
		{
			const toDoText = toDo.title.toLowerCase();
			const searchText = searchValue.toLowerCase();

			return toDoText.includes(searchText);
		});

	const completeToDo = (id) =>
	{
		const toDoIndex = toDos.findIndex(toDo => toDo.id === id);

		const newToDos = [...toDos];

		newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed;

		saveToDos(newToDos);
	}

	const deleteToDo = (id) =>
	{
		const toDoIndex = toDos.findIndex(toDo => toDo.id === id);

		const newToDos = [...toDos];

		newToDos.splice(toDoIndex, 1);

		saveToDos(newToDos);
	}

	const addToDo = (title) =>
	{
		const newToDos = [...toDos];

		newToDos.push(
			{
				completed:false,
				title,
				id: toDos.length + 1
			}
		)

		saveToDos(newToDos);
	}

	return(
		<ToDoContext.Provider value={{
			totalToDos,
			completedToDos,
			searchValue,
			searchedToDos,
			openModal,
			setOpenModal,
			setSearchValue,
			deleteToDo,
			completeToDo,
			addToDo
		}}>
			{children}
		</ToDoContext.Provider>
	)
}

export {ToDoContext, ToDoProvider};
