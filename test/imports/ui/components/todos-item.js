import './todos-item.html';

Template.Todos_item.helpers({
	checkedClass(todo) {
		return todo.checked && 'checked';
	},
	editingClass(editing) {
		return editing && 'editing';
	}
});