import { useContext } from 'react';

import { ToDoContext } from '../context/ToDoContext';

import '../assets/styles/components/TodoSearch.css';

export const TodoSearch = () =>
{
	const { setSearchValue, searchValue } = useContext(ToDoContext);


	const onSearchValueChange = e =>
	{
		const { value } = e.target;

		setSearchValue(value);
	};

	return (
		<input className="TodoSearch" placeholder="Cebolla" value={searchValue} onChange={onSearchValueChange}/>
	);
};
