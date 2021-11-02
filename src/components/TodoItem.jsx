import '../assets/styles/components/TodoItem.css'

export const TodoItem = ({title, completed}) => {
	return (
		<li className="TodoItem">
			<span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>√</span>
			<p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{title}</p>
			<span className="Icon Icon-delete">X</span>
    	</li>
	);
};
