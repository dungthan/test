import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './lists-show.html';

// Component used in the template
import './todos-item.js';

Template.Lists_show.onCreated(function listShowOnCreated() {
	this.state = new ReactiveDict();
	this.state.setDefault({
		editing: false,
		editingTodo: false,
	});
});

Template.Lists_show.helpers({
	todoArgs(todo) {
		const instance = Template.instance();
		return {
			todo,
			editing: instance.state.equals('editingTodo', todo._id),
			onEditingChange(editing) {
				instance.state.set('editingTodo', editing ? todo._id : false);
			},
		};
	},
	editing() {
		const instance = Template.instance();
		return instance.state.get('editing');
	}
});