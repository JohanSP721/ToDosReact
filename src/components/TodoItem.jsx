import '../assets/styles/components/TodoItem.css'

export const TodoItem = ({title, completed, onComplete, onDelete}) =>
{
	return (
		<li className="TodoItem">
			<span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={onComplete}>√</span>
			<p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{title}</p>
			<span className="Icon Icon-delete" onClick={onDelete}>X</span>
    	</li>
	);
};
