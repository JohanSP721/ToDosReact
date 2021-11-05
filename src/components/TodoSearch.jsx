import '../assets/styles/components/TodoSearch.css'

export const TodoSearch = ({setSearchValue, searchValue}) =>
{

	const onSearchValueChange = e =>
	{
		const { value } = e.target;

		setSearchValue(value);
	}

	return (
		<input className="TodoSearch" placeholder="Cebolla" value={searchValue} onChange={onSearchValueChange}/>
	);
};
