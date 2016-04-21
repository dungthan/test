import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Lists } from '../../api/lists/lists.js';

import { listRenderHold } from '../launch-screen.js';

import './lists-show-page.html';
import './app-not-found.js';
import '../components/lists-show.js';

Template.Lists_show_page.onCreated(function listsShowPageOnCreated() {
	this.getListId = () => FlowRouter.getParam('_id');

	// this.autorun(() => {
	// 	//this.subscribe('todos.inList', this.getListId());
	// });
});

Template.Lists_show_page.onRendered(function listShowPageOnRendered() {
	this.autorun(() => {
		if (this.subscriptionsReady()) {
			listRenderHold.release();
		}
	});
})

Template.Lists_show_page.helpers({
	listIdArray() {
		const instance = Template.instance();
		const listId = instance.getListId();
		return Lists.findOne(listId) ? [listId] : [];
	},

	listArgs(listId) {
		const instance = Template.instance();

		const list = Lists.findOne(listId, { fields: { _id: true } });

		const todos = list && Lists.todos();
		return {
			todosRedy: instance.subscriptionsReady(),
			list() {
				return Lists.findOne(listId);
			},
			todos,
		}
	}
});