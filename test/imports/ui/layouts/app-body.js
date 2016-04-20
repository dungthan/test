import './app-body.html';

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Lists } from '../../api/lists/lists.js';
import { insert } from '../../api/lists/methods.js';

Template.App_body.onCreated(function appBodyOnCreated() {
	this.subscribe('lists.public');

	this.state = new ReactiveDict();
	this.state.setDefault({
		menuOpen: false,
	});
});

Template.App_body.helpers({
	menuOpen() {
		const instance = Template.instance();
		return instance.state.get('menuOpen') && 'menu-open';
	},
	cordova() {
		return Meteor.isCordova && 'cordova';
	},
	lists() {
		return Lists.find();
	},
	templateGestures: {
		'swipeleft .cordova'(event, instance) {
			instance.state.set('menuOpen', false);
		},
		'swiperight .cordova'(event, instance) {
			instance.state.set('menuOpen', true);
		},
	},
});

Template.App_body.events({
	'click .js-menu'(event, insatnce) {
		instance.state.set('menuOpen', !instance.state.get('menuOpen'));
	},
	'click #menu a'(event, instance) {
		instance.state.set('menuOpen', false);
	},
	'click .js-new-list'() {
		const listId = insert.call((err) => {
			if (err) {
				alert('Could not create list.');
			}
		});
	},
});